"use client";
import "./../scss/products.scss";
import React, { useLayoutEffect, useState } from "react";
// import GradientBgImage from '@/components/products/GradientBgImage';
export default function Products() {
  const pdCategory = [
    { name: 'Women', link: '/collections/women' },
    { name: 'Men', link: '/collections/men' },
    { name: 'Shoes', link: '/collections/shoes' },
    { name: 'Popular', link: '/collections/Popular' },
    { name: 'Best Seller', link: '/collections/bestSeller' },
    { name: 'Accesories', link: '/collections/accesories' }
  ]
  const pdList = [
    { name: 'Women Shorts', link: '/collections/women', price: '$300', img1: 'https://avon-demo.myshopify.com/cdn/shop/products/1_ad3b5994-221c-4300-86d8-9d8cf96459ed_350x.jpg?v=1561438589', img2: '//avon-demo.myshopify.com/cdn/shop/products/6_1436d4cd-cab1-41e2-b61c-cb659d54f29e_550x.jpg' },
    { name: 'Men Shorts', link: '/collections/men', price: '$300' },
    { name: 'Shoes', link: '/collections/shoes', price: '$300' },
    { name: 'Popular', link: '/collections/Popular', price: '$300' },
    { name: 'Popular', link: '/collections/Popular', price: '$300' },
    { name: 'Popular', link: '/collections/Popular', price: '$300' },
    { name: 'Popular', link: '/collections/Popular', price: '$300' },
    { name: 'Popular', link: '/collections/Popular', price: '$300' },
    { name: 'Popular', link: '/collections/Popular', price: '$300' }
  ]
  const list = [
    { bgImage: 'red 0%' },
    { bgImage: 'orange 50%' },
    { bgImage: 'yellow 100%' },
  ];
  
  let showDetailsIndex = ''
  
  const handleMove = (img: string) => {
    showDetailsIndex = img
  }
  const handleOut = (img: string) => {
    showDetailsIndex = img
  }
  const listItems = pdCategory.map(product =>
    (<li key={product.name} className="lvl-1">
        <a href={product.link} className="site-nav">{ product.name }</a>
    </li>)
  )

  const producgItems = pdList.map(product =>(
    <div className="gitem" key={product.name}>
        {/* <div className="gitem-img" style={{
          backgroundImage: URL(product.img1)
        }}
        onMouseOver={handleMove(product.img2)} 
        onMouseOut={handleOut(product.img1)}></div> */}
        <div className="details">
          <a href="">{ product.name }</a>
          <div className="grid-view-item__meta">
            <span className="pr_price">{ product.price }</span>
          </div>
          <div className="gridSwatches"></div>
        </div>
      </div>
  ))
  return (
    <div className="content">
      <div className="sidebar">
        <div className="title">CATEGORIES</div>
        <div className="widget-content">
          <ul className="sidebar_cate">
            { listItems }
          </ul>
        </div>
      </div>
      <div className="productList grid grid-cols-3 gap-3">
        {producgItems}
        {/* <div>
          <GradientBgImage list={list} />
        </div> */}
      </div>
    </div>
  )
}