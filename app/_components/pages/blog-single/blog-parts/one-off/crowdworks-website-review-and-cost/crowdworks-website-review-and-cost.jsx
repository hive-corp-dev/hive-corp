import Table from "./crowdworks-fee-table/table";
import PriceTable from "./crowdworks-price-table/price-table";

function FeeTable() {
  return <Table />;
}

function CwPriceTable() {
  return <PriceTable />;
}

const CrowdworksWebsiteReviewAndCost = {
  feeTable: FeeTable,
  priceTable: CwPriceTable,
};

export default CrowdworksWebsiteReviewAndCost;
