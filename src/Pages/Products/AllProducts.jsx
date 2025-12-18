import './AllProducts.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaHeart, FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

import { useContext, useEffect, useState } from 'react';
import { displayContext } from '../../context/DisplayProducts';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/UseProduct';


export default function AllProducts({val}) {

  const { getData, products } = useContext(displayContext);
  const {wishListHandler , cartHandler} = useProduct(val)

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    getData("women");
    getData("men");
    getData("kids");
  }, []);

  // دمج كل المنتجات
  const allProducts = [
    ...products.women,
    ...products.men,
    ...products.kids
  ].sort((a, b) => a.id - b.id);

  // فلترة (Search + Category)
  const filteredProducts = allProducts.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "all" ||
      item.category.toLowerCase() === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (
    <>
      <div className='Products position-relative py-5'>

        {/* Back Button */}
        <Link
          to={-1}
          style={{ top: '50px', left: '50px', backgroundColor: '#ae1c9ab6' }}
          className='btn text-light position-absolute'
        >
          <FaArrowLeft />
        </Link>

        {/* Search */}
        <div className="container py-3">
          <div className="d-flex mx-auto w-50">
            <input
              className="form-control me-2 p-2"
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn" type="button">
              <IoSearch />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="container text-center my-4">
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            {["all", "women", "men", "kids"].map((cat) => (
              <button
                key={cat}
                className={`btn px-4 py-2 rounded ${
                  selectedCategory === cat
                    ? "btn-dark text-light"
                    : "btn-outline-dark"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className='m-5'>
          <p className='fs-3 fw-bold text-center my-5' style={{ color: '#ae1c9ab6' }}>
            All <span className='text-dark'>Products</span>
          </p>

          <div className="container text-center">
            <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">

              {filteredProducts.length === 0 && (
                <p className="text-center fs-4 text-muted">
                  No products found
                </p>
              )}

              {filteredProducts.map((val) => {
                
                const finalPrice = val.price - (val.price * val.discount / 100);

                return (
                  <div key={val.id} className="col">
                    <div className="border rounded-3 h-100 d-flex flex-column">

                      <div
                        className="d-flex justify-content-center p-3"
                        style={{ height: '250px' }}
                      >
                        <img
                          src={val.image}
                          alt={val.title}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain'
                          }}
                        />
                      </div>

                      <div className='m-4 d-flex flex-column align-items-start flex-grow-1'>
                        <span>{val.rate}</span>
                        <p className='fw-bold pt-1'>{val.title}</p>

                        <p className='fw-bold'>
                          <del className='pe-3 fw-normal text-muted'>
                            ${val.price}
                          </del>
                          ${finalPrice}
                        </p>

                        <div className='w-100 d-flex justify-content-between align-items-center mt-auto'>
                          <button
                            className='btn rounded px-2 py-1'
                            onClick={() => wishListHandler(val)}
                          >
                            <FaHeart />
                          </button>

                          <button
                            className='btn rounded px-2 py-1'
                            onClick={() => cartHandler(val, finalPrice)}
                          >
                            <FaCartShopping />
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>

      </div>
    </>
  );
}
