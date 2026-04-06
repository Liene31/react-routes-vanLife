import { useOutletContext } from "react-router-dom";

export function HostVanPricing() {
  const { currentVan } = useOutletContext();
  if (!currentVan) return <h2>Loading...</h2>;
  return (
    <h3 className="host-van-price">
      ${currentVan.price}
      <span>/day</span>
    </h3>
  );
}
