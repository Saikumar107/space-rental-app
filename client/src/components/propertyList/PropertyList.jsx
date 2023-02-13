import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://media.cntraveler.com/photos/5841fe31e186e2555afdd5ca/master/pass/alfond-inn-cr-courtesy.jpg",
    "https://th.bing.com/th/id/OIP.oc64g_uA4MUc64feqSMe_gHaFG?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.vuNYiq9aE_bR_P3OOSZAAAHaEK?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.xi72toqg1ijQyoruKuHWOgHaEo?pid=ImgDet&rs=1",
    "https://www.familyhandyman.com/wp-content/uploads/2018/02/handcrafted-log-home.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;