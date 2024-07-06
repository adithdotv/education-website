import React from 'react'
import './Plans.css'
function Plans() {

    const pricingData = [
        {
            title:'Regular Member',
            price:'$0',
            duration:'/month',
            color:'#fff',
            feature: [
                'Unlimited access to the courses',
                'Customer Support',
                'Personal Mentor',
                'Standard options',
                '5 Classes per week'
            ]
        },
        {
            title:'Premium Member',
            price:'$100',
            duration:'/month',
            color:'#6f55f2',
            feature: [
                'Unlimited access to the courses',
                'Customer Support',
                'Personal Mentor',
                'Standard options',
                '5 Classes per week'
            ]
        },
        {
            title:'Standard Member',
            price:'$10',
            duration:'/month',
            color:'#fff',
            feature: [
                'Unlimited access to the courses',
                'Customer Support',
                'Personal Mentor',
                'Standard options',
                '5 Classes per week'
            ]
        },
    ]

  return (
    <div className='container'>
        <div className='pricing-top'>
            <h2 className='section_title'>Premium Pricing Plan</h2>
            <p>Unlock elite tech services with out Premium Pricing Plan and soar ahead of competition</p>
        </div>
        <div className='pricing-wrapper'>
            {
                pricingData.map((pricingItem, index)=>(
                    <div className='pricing-item' key={index}>
                        <div className='pricing_card-top' style={{background: pricingItem.color }}>
                            <h2 className='section_title'>{pricingItem.title}</h2>
                            <h2 className='pricing_section_title'>
                                {pricingItem.price} <span>{pricingItem.duration}</span>
                            </h2>
                        </div>
                        <div className='services'>
                            <ul>
                                {pricingItem.feature.map((features, index) =>(
                                    <li key={index}>{features}</li>
                                )
                                )}
                            </ul>
                            <button className='register-btn'>Join</button>
                        </div>
                    </div>
                )
            )}
        </div>
    </div>
  )
}

export default Plans
