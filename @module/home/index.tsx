"use client";

import React from 'react'
import HeroSection from './banner-part';
import FeaturedCategories from './featured-categories';
import BestDeals from './today-best-deals';
import CustomerMostLoved from './customer-most-loved';
import BannerSection from './banner-section';
import RecommendedForYou from './recommended-for-you/inde';
import FeaturedOffers from './our-featured-offers';
import BuyerProtection from './entry-buyer-protection';
import ShopByBrands from './shop-by-brands';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCategories />
      <BestDeals />
      <CustomerMostLoved />
      <BannerSection />
      <RecommendedForYou />
      <FeaturedOffers />
      <BuyerProtection />
      <ShopByBrands />
    </div>
  )
}

export default HomePage