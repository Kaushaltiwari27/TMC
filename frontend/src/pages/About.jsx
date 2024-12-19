import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>At TheChillMonk (TMC), we believe fashion is more than just clothing—it's a reflection of your vibe, your energy, and your individuality. Born from a passion for effortless style and inspired by the dynamic world of streetwear, we specialize in oversized and printed T-shirts that let you express yourself without saying a word.</p>
        <p>Our mission is simple: to bring you trendy, comfortable, and high-quality apparel that stands out in a crowd. Every piece we create combines bold designs with premium fabrics, making sure you stay stylish and cozy all day long.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>TheChillMonk is for the dreamers, the wanderers, and the creators—those who live life on their terms and aren't afraid to show it. We're here to be your go-to brand for cool, versatile streetwear that’s as unique as you are.</p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'TO CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Trend-Driven Designs</b>
          <p className='text-gray-600'>Stay ahead of the curve with our bold and creative prints, inspired by the latest streetwear trends and youth culture.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Premium Quality</b>
          <p className='text-gray-600'>We prioritize comfort and durability, using only the finest fabrics to ensure your oversized T-shirts look great and feel even better.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Affordability Meets Style</b>
          <p className='text-gray-600'>High-quality streetwear doesn’t have to break the bank. We bring you trendy apparel at prices that fit your budget.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
