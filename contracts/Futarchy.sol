import "PredictionMarket";

contract Futarchy
{
	enum PreCondition{None}
	enum Metric{AccountBalance}
	enum Action{}

	struct Proposal
	{
		uint marketEndTime;
		PredictionMarket acceptanceMarket;
		PredictionMarket rejectionMarket;

		uint preConditionEvaluationTime;
		PreCondition preCondition;

		uint metricEvaluationTime;
		Metric metric;
		Action action;
	}

	// should this be a map?
	Proposal[] public proposals;
	
	function Futarchy()
	{
		// constructor
	}

	function addProposal(uint marketEndTime, uint preConditionEvaluationTime, PreCondition preCondition, uint metricEvaluationTime, Metric metric, Action action)
	{
		PredictionMarket acceptanceMarket = new PredictionMarket(marketEndTime);
		PredictionMarket rejectionMarket = new PredictionMarket(marketEndTime);

		var proposal = Proposal(
			marketEndTime,
			acceptanceMarket,
			rejectionMarket,
			preConditionEvaluationTime,
			preCondition,
			metricEvaluationTime,
			metric,
			action
		);

		proposals.push(proposal);
	}

	function evaluateProposalMarketEnd(uint index)
	{
		Proposal proposal = proposals[index];

		if(now < proposal.marketEndTime)
		{
			return;
		}


	}

	function evaluateProposalPreCondition(uint index)
	{
		Proposal proposal = proposals[index];

		if(now < proposal.preConditionEvaluationTime)
		{
			return;
		}

		bool isPreConditionMet = getIsPreConditionMet(proposal);

		if(!isPreConditionMet)
		{
			proposal.acceptanceMarket.revert();
			proposal.rejectionMarket.revert();
			return;
		}
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