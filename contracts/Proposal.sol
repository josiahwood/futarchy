import "PredictionMarket";
import "ProposalTermsBase";

contract Proposal
{
	ProposalTermsBase terms;
	PredictionMarket acceptanceMarket;
	PredictionMarket rejectionMarket;

	function Proposal()
	{
		acceptanceMarket = new PredictionMarket();
		rejectionMarket = new PredictionMarket();
	}
}