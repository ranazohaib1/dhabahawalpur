import Link from "next/link";
const PropertyItem = ({ product, slug,baseUrl }) => {
  return (
    <>
      <div className="ltn__search-by-place-item">
        <div className="search-by-place-img">
          <Link href={`${baseUrl}/${slug}`}>
            {console.log('product.productImg', product.productImg)}
            <img src={`/img/gallery/${product.productImg}`} alt="#" />
          </Link>
          {/* <div className="search-by-place-badge">
            <ul>
              <li>{product.properties} Properties</li>
            </ul>
          </div> */}
        </div>
        <div className="search-by-place-info">
          {/* <h6>
            <Link href="/locations">{product.locantion}</Link>
          </h6> */}
          <h4>
            <Link href={`${baseUrl}/${slug}`}>{product.district}</Link>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
            tempor incididunt ut labore et
          </p>
          {/* <div className="search-by-place-btn">
            <Link href={`${baseUrl}/${slug}`}>
              View Property <i className="flaticon-right-arrow"></i>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PropertyItem;
