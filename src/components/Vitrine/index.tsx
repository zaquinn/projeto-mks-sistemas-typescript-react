import { Card } from "../Card";
import { ContainerGrid, Grid, InfoResult, ContainerSearch } from "./styles";
import { useEffect, useState } from "react";
import {
  addToCart,
  getProductsFromApi,
  selectProducts,
  IProduct,
  selectLoading,
} from "../../features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SearchBar } from "../SearchBar";
import { CardSkeleton } from "../CardSkeleton";

export const Vitrine = () => {
  const [searchResults, setSearchResults] = useState<IProduct[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(getProductsFromApi());
  }, []);

  useEffect(() => {}, [searchValue]);

  const filterProducts = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearchValue(value);

    const filter = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.name
          .split("")
          .reverse()
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
    );
    setSearchResults(filter);
    if (value === "") {
      setSearchResults([]);
    }
  };

  return (
    <>
      <ContainerSearch>
        <SearchBar onChange={filterProducts} searchValue={searchValue} />
        {searchValue.length > 0 && (
          <InfoResult>
            Exibindo resultados para: <span>{searchValue}</span>
          </InfoResult>
        )}
      </ContainerSearch>
      <ContainerGrid>
        <Grid>
          {products.length > 0 &&
          searchResults.length === 0 &&
          loading === false
            ? products.map((item, index) => {
                return (
                  <Card
                    name={item.name}
                    description={item.description}
                    photo={item.photo}
                    price={item.price}
                    addToCartFunction={() => dispatch(addToCart(item))}
                    key={index}
                  />
                );
              })
            : searchResults.length > 0 && loading === false
            ? searchResults.map((item, index) => {
                return (
                  <Card
                    name={item.name}
                    description={item.description}
                    photo={item.photo}
                    price={item.price}
                    addToCartFunction={() => dispatch(addToCart(item))}
                    key={index}
                  />
                );
              })
            : [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                <CardSkeleton key={index} />
              ))}
        </Grid>
      </ContainerGrid>
    </>
  );
};
