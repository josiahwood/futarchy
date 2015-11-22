import "PredictionMarket";

contract Futarchy
{
	enum PreCondition{None}
	enum Metric{AccountBalance}
	enum Action{Send}

	struct Proposal
	{
		// all of the *Time fields get set to 0 when they have been executed

		uint marketEndTime;
		PredictionMarket acceptanceMarket;
		PredictionMarket rejectionMarket;

		uint preConditionEvaluationTime;
		PreCondition preCondition;

		uint metricStartEvaluationTime;
		uint metricEndEvaluationTime;
		Metric metric;
		uint startingAccountBalance;

		Action action;
	}

	// should this be a map?
	Proposal[] public proposals;
	
	function Futarchy()
	{
		// constructor
	}

	function addProposal(uint marketEndTime, uint preConditionEvaluationTime, PreCondition preCondition, uint metricStartEvaluationTime, uint metricEndEvaluationTime, Metric metric, Action action)
	{
		PredictionMarket acceptanceMarket = new PredictionMarket(marketEndTime);
		PredictionMarket rejectionMarket = new PredictionMarket(marketEndTime);

		var proposal = Proposal(
			marketEndTime,
			acceptanceMarket,
			rejectionMarket,
			preConditionEvaluationTime,
			preCondition,
			metricStartEvaluationTime,
			metricEndEvaluationTime,
			metric,
			0,
			action
		);

		proposals.push(proposal);
	}

	function evaluateProposalMarketEnd(uint index)
	{
		Proposal proposal = proposals[index];

		if(proposal.marketEndTime == 0 || now < proposal.marketEndTime)
		{
			return;
		}

		uint acceptanceOdds = proposal.acceptanceMarket.evaluateOdds();
		uint rejectionOdds = proposal.rejectionMarket.evaluateOdds();

		if(acceptanceOdds <= rejectionOdds)
		{
			proposal.acceptanceMarket.revert();
		}
		else
		{
			proposal.rejectionMarket.revert();
		}

		proposal.marketEndTime = 0;
	}

	function evaluateProposalPreCondition(uint index)
	{
		Proposal proposal = proposals[index];

		if(proposal.preConditionEvaluationTime == 0 || now < proposal.preConditionEvaluationTime)
		{
			return;
		}

		bool isPreConditionMet = getIsPreConditionMet(proposal);

		if(!isPreConditionMet)
		{
			// need to see what happens here when one has already been reverted by evaluateProposalMarketEnd
			proposal.acceptanceMarket.revert();
			proposal.rejectionMarket.revert();
		}

		proposal.preConditionEvaluationTime = 0;
	}

	function getIsPreConditionMet(Proposal proposal) private
		returns(bool)
	{
		if(proposal.preCondition == PreCondition.None)
		{
			return true;
		}
		else
		{
			throw;
		}
	}

	function getIsMetricMet(Proposal proposal) private
	{

	}
}