'use client'
import Backsvg from '@/src/Component/Back/Backsvg'
import { ic_AddFileIconPlans, ic_AddPlanesPlushIcon, ic_AddPlanesPlushIconWhite, ic_CheckMark, ic_Delete, ic_DeletePlanes, ic_EditPlanes, ic_MainPlanes, ic_Manage_Plans } from '@/src/Utils/svg'
import React from 'react'
import style from './manageplans.module.css'
import Heading3Fonts from '@/src/Typography/text/Heading3Fonts'
import ToggleSwitch from '@/src/Component/FormElement/ToggleSwitch'
import HeadingTextH1 from '@/src/Typography/text/HeadingTextH1'
import MediumFont from '@/src/Typography/text/MediumFont'
import Button from '@/src/Component/FormElement/Button'

const plansData = {
    "plans": [
        {
            "type": "Standard",
            "description": "A balanced plan providing essential tax optimization services with reliable support. Perfect for clients looking for solid performance at a reasonable price.",
            "price": {
                "amount": 50,
                "interval": "month"
            },
            "features": [
                "Basic tax optimization",
                "Priority support",
                "Personalized advice",
                "Annual financial review"
            ],
            "enrolled": 234,
            "Main": 0
        },
        {
            "type": "Premium Plus",
            "description": "A balanced plan providing essential tax optimization services with reliable support. Perfect for clients looking for solid performance at a reasonable price.",
            "price": {
                "amount": 100,
                "interval": "month"
            },
            "features": [
                "Comprehensive tax optimization",
                "priority support",
                "personalized advice",
                "annual financial review"
            ],
            "enrolled": 234,
            "Main": 1

        }
    ]
}

const Manageplans = () => {
    return (
        <>
            <Backsvg Svg={ic_Manage_Plans.icon()} text={'Manage Plans'} />
            <div className={style.MainDivForManagePlans}>
                {plansData.plans.map((plan, index) => (
                    <div key={index} className={style.MainDivForPlansCart}>
                        {plan.Main === 1 && <div className={style.MainDivForPopularPlanMain}>{ic_MainPlanes.icon()}</div>}

                        <Heading3Fonts className={style.HedingStanderd} text={plan.type} />
                        <span className={style.DiscriptionTextHading}>{plan.description}</span>
                        <div className={style.MainDivForToggalAndActiv}>
                            <div className={style.ActivatePlanes}>Activate Plan</div>
                            <ToggleSwitch className={style.YesNoSwitch} />
                        </div>
                        <HeadingTextH1
                            className={style.PriceText}
                            text={`Price: $${plan.price.amount}/${plan.price.interval}`}
                        />
                        <div>
                            <MediumFont className={style.FeaturesText} text={'Features'} />
                            {plan.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className={style.MainDivForFeatures}>
                                    <div>{ic_CheckMark.icon()}</div>
                                    <div className={style.DiscriptionTextHading}>{feature}</div>
                                </div>
                            ))}
                            <div className={style.MainDivForEnrolled}>
                                <div className={style.EnrolledText}>{plan.enrolled} enrolled</div>
                            </div>
                            <div className={style.ActivatePlanesButtonMain}>
                                <button className={style.DeletePlan}>{ic_DeletePlanes.icon()}Delete Plan</button>
                                <button className={style.EditPlan}>{ic_EditPlanes.icon()}Edit Plan</button>
                            </div>
                        </div>
                    </div>
                ))}
                {plansData.plans.length > 0 && (

                    <div className={style.MainDivForAddPlansCart}>
                        <div className={style.MainDivForSvgAndAddPlans}>
                            <div className={style.AddNewPlanSvgDiv}>{ic_AddPlanesPlushIcon.icon()}</div>
                            <div className={style.AddNewPlanText}>Add new plan</div>
                        </div>
                    </div>
                )}

                {plansData.plans.length <= 0 && (
                    <div className={style.MainDivForFirstPlan}>
                        <div className={style.FileSvgIcon}>{ic_AddFileIconPlans.icon()}</div>
                        <div className={style.MainDivForFirstPlanText}>
                            <span className={style.NoPlansAvailableText}>No plans available</span>
                            <span className={style.CreatFirstPlansText}>Create your first plan</span>
                        </div>
                        <Button svg={ic_AddPlanesPlushIconWhite.icon()} text={'Add plan'} />
                    </div>
                )}
            </div>
        </>
    )
}

export default Manageplans