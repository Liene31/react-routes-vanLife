import { useOutletContext } from "react-router-dom";

export function HostVanPhotos() {
  const { currentVan } = useOutletContext();
  if (!currentVan) return <h2>Loading...</h2>;
  return (
    <div className="host-van-detail-image">
      <img src={currentVan.imageUrl} />
    </div>
  );
}
