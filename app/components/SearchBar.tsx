"use client";
import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { getData } from '@/utils/data';

interface Product {
  id: number;
  name: string;
  code: string;
  price: number;
  image_url: string;
  quantity: number;
}

type Props = {
  onSearch: (filteredProducts: Product[]) => void;
}

const SearchBar = ({onSearch}: Props) => {
  const [query, setQuery] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getData();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleSearch = () => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.code.toLowerCase().includes(query.toLowerCase())
    );
    onSearch(filtered);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <div className='flex items-center bg-gray-100 p-2 rounded-full max-md:hidden'>
        <button onClick={handleSearch}><BiSearch size={20} className='opacity-50' /></button>
        <input 
        type="text"
        className='outline-none bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]'
        placeholder="Find product here"
        value={query}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        autoComplete="off"
        />
      </div>
    </div>
  )
}

export default SearchBar