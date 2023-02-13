import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=visakhapatnam,hyderabad,bangalore"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://gumlet.assettype.com/thebridgechronicle/2020-10/8d0cc882-1aef-47ed-ba70-a6a70ad976ad/63f4f1c45c56cd8872349308a1e9b0da.jpg?format=auto"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Visakhapatnam</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.go2holiday.com/wp-content/uploads/2012/11/CHARMINAR.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hyderabad</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://static.toiimg.com/photo/65227812.cms"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bangalore</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;