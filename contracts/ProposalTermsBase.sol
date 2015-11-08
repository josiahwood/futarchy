import "Owned";

contract ProposalTermsBase is Owned
{
	function arePreConditionsMet() constant
		returns(bool result);

	function execute() onlyowner;

	function areMetricsMet() constant
		returns(bool result);
}