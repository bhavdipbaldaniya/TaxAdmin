// import React from 'react'
// import Back from '@/src/Component/Back/page'
// import HeadingTextH1 from '@/src/Typography/text/HeadingTextH1'
// import { Label } from '@/src/Component/FormElement/Lable'
// import Input from '@/src/Component/FormElement/Input'
// import InputNum from '@/src/Component/FormElement/InputNum'
// import Dropdown from '@/src/Component/FormElement/Dropdown'
// import ToggleOption from '@/src/Component/FormElement/ToggleOption'
// import style from './manageplans.module.css'
// import Button from '@/src/Component/FormElement/Button'

// const PlanFeatures = () => {
//     const options = [
//         { label: "Monthly", value: "Monthly" },
//         { label: "Yearly", value: "Yearly" },
//     ];
//     return (
//         <>
//             <Back text={'Add New Plans'} />
//             <div>
//                 <div className={style.MainDivForPlanInformation}>
//                     <div className={style.HedingMainDiv}>
//                         <HeadingTextH1 text={'Plan Information'} />
//                     </div>
//                     <div className={style.ManiDivForPlanInformationFild}>
//                         <div className={style.MainDivForPlanTitle}>
//                             <div className={style.ManageWidthPlanTitle}>
//                                 <Label>{'Plan Title'}</Label>
//                                 <Input
//                                     placeholder={'Eg: Premium'}
//                                 />
//                             </div>
//                             <div className={style.ManageWidthPlanTitle}>
//                                 <Label>{'Plan Amount'}</Label>
//                                 <InputNum
//                                     placeholder={'Eg: $24K'}
//                                 />
//                             </div>
//                         </div>
//                         <div className={style.MainDivForDescriptionPlan}>
//                             <Label>{'Plan Description'}</Label>
//                             <Input
//                                 placeholder={'Eg. This is the best plan for professional CA'}
//                             />
//                         </div>
//                         <div className={style.MainDivForPlanType}>
//                             <div>
//                                 <Label>{'Plan Description'}</Label>
//                                 <Dropdown
//                                     disable={false}
//                                 />
//                             </div>
//                             <div>
//                                 <Label>{'Plan Type'}</Label>
//                                 <ToggleOption options={options} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className={style.MainDivForPlanFeatures}>
//                     <div className={style.HedingMainDiv}>
//                         <HeadingTextH1 text={'Plan Features'} />
//                     </div>
//                     <div className={style.ManiDivForPlanInformationFild}>
//                         <div className={style.MainDivForFeturshOption}>
//                             <Label>{'Feature 1'}</Label>
//                             <InputNum
//                                 placeholder={'Basic Tax Optimization'}
//                             />
//                             <div></div>
//                         </div>
//                         <div className={style.MainDivForFeturshOption}>
//                             <Label>{'Feature 2'}</Label>
//                             <InputNum
//                                 placeholder={'Basic Tax Optimization'}
//                             />
//                             <div></div>
//                         </div>
//                         <Button
//                             className={style.AddIncomeBtm}
//                             type={"button"}
//                             text={"+ Add more"}
//                         // onClick={handleAddIncome}
//                         />
//                     </div>
//                 </div>

//                 <div className={style.MainDivForButtonCancelCreat}>
//                     <Button  className={style.CancelButton}type={"button"} text={"Cancel"} />
//                     <Button type={"button"} text={"Create Plan"} />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default PlanFeatures


// import React, { useState } from 'react';
// import Back from '@/src/Component/Back/page';
// import HeadingTextH1 from '@/src/Typography/text/HeadingTextH1';
// import { Label } from '@/src/Component/FormElement/Lable';
// import Input from '@/src/Component/FormElement/Input';
// import InputNum from '@/src/Component/FormElement/InputNum';
// import Dropdown from '@/src/Component/FormElement/Dropdown';
// import ToggleOption from '@/src/Component/FormElement/ToggleOption';
// import style from './manageplans.module.css';
// import Button from '@/src/Component/FormElement/Button';

// const PlanFeatures = () => {
//     const [features, setFeatures] = useState([{ label: 'Feature 1', placeholder: 'Basic Tax Optimization' }]);

//     const options = [
//         { label: "Monthly", value: "Monthly" },
//         { label: "Yearly", value: "Yearly" },
//     ];

//     const handleAddFeature = () => {
//         setFeatures(prev => [...prev, { label: `Feature ${prev.length + 1}`, placeholder: 'New Feature Description' }]);
//     };

//     const handleDeleteFeature = (indexToDelete) => {
//         setFeatures(prev => prev.filter((_, index) => index !== indexToDelete));
//     };

//     return (
//         <>
//             <Back text={'Add New Plans'} />
//             <div>
//                 <div className={style.MainDivForPlanInformation}>
//                     <div className={style.HedingMainDiv}>
//                         <HeadingTextH1 text={'Plan Information'} />
//                     </div>
//                     <div className={style.ManiDivForPlanInformationFild}>
//                         <div className={style.MainDivForPlanTitle}>
//                             <div className={style.ManageWidthPlanTitle}>
//                                 <Label>{'Plan Title'}</Label>
//                                 <Input placeholder={'Eg: Premium'} />
//                             </div>
//                             <div className={style.ManageWidthPlanTitle}>
//                                 <Label>{'Plan Amount'}</Label>
//                                 <InputNum placeholder={'Eg: $24K'} />
//                             </div>
//                         </div>
//                         <div className={style.MainDivForDescriptionPlan}>
//                             <Label>{'Plan Description'}</Label>
//                             <Input placeholder={'Eg. This is the best plan for professional CA'} />
//                         </div>
//                         <div className={style.MainDivForPlanType}>
//                             <div>
//                                 <Label>{'Plan Description'}</Label>
//                                 <Dropdown disable={false} />
//                             </div>
//                             <div>
//                                 <Label>{'Plan Type'}</Label>
//                                 <ToggleOption options={options} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className={style.MainDivForPlanFeatures}>
//                     <div className={style.HedingMainDiv}>
//                         <HeadingTextH1 text={'Plan Features'} />
//                     </div>
//                     <div className={style.ManiDivForPlanInformationFild}>
//                         {features.map((feature, index) => (
//                             <div key={index}>
//                                 <div className={style.MainDivForFeturshOption}>
//                                     <Label>{feature.label}</Label>
//                                     <Input placeholder={feature.placeholder} />
//                                 </div>
//                                 <Button
//                                     className={style.AddIncomeBtm}
//                                     type={"button"}
//                                     text={"Delete"}
//                                     onClick={() => handleDeleteFeature(index)} // Delete feature based on index
//                                 />
//                             </div>
//                         ))}
//                         <Button
//                             className={style.AddIncomeBtm}
//                             type={"button"}
//                             text={"+ Add more"}
//                             onClick={handleAddFeature}
//                         />
//                     </div>
//                 </div>

//                 <div className={style.MainDivForButtonCancelCreat}>
//                     <Button className={style.CancelButton} type={"button"} text={"Cancel"} />
//                     <Button type={"button"} text={"Create Plan"} />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default PlanFeatures;



import React, { useState } from 'react';
import Back from '@/src/Component/Back/page';
import HeadingTextH1 from '@/src/Typography/text/HeadingTextH1';
import { Label } from '@/src/Component/FormElement/Lable';
import Input from '@/src/Component/FormElement/Input';
import InputNum from '@/src/Component/FormElement/InputNum';
import Dropdown from '@/src/Component/FormElement/Dropdown';
import ToggleOption from '@/src/Component/FormElement/ToggleOption';
import style from './manageplans.module.css';
import Button from '@/src/Component/FormElement/Button';

const PlanFeatures = () => {
    const [features, setFeatures] = useState([{ label: 'Feature 1', placeholder: 'Basic Tax Optimization' }]);

    const options = [
        { label: "Monthly", value: "Monthly" },
        { label: "Yearly", value: "Yearly" },
    ];

    const handleAddFeature = () => {
        setFeatures(prev => [...prev, { label: `Feature ${prev.length + 1}`, placeholder: 'New Feature Description' }]);
    };

    const handleDeleteFeature = (indexToDelete) => {
        setFeatures(prev => prev.filter((_, index) => index !== indexToDelete));
    };

    return (
        <>
            <Back text={'Add New Plans'} />
            <div>
                <div className={style.MainDivForPlanInformation}>
                    <div className={style.HedingMainDiv}>
                        <HeadingTextH1 text={'Plan Information'} />
                    </div>
                    <div className={style.ManiDivForPlanInformationFild}>
                        <div className={style.MainDivForPlanTitle}>
                            <div className={style.ManageWidthPlanTitle}>
                                <Label>{'Plan Title'}</Label>
                                <Input placeholder={'Eg: Premium'} />
                            </div>
                            <div className={style.ManageWidthPlanTitle}>
                                <Label>{'Plan Amount'}</Label>
                                <InputNum placeholder={'Eg: $24K'} />
                            </div>
                        </div>
                        <div className={style.MainDivForDescriptionPlan}>
                            <Label>{'Plan Description'}</Label>
                            <Input placeholder={'Eg. This is the best plan for professional CA'} />
                        </div>
                        <div className={style.MainDivForPlanType}>
                            <div>
                                <Label>{'Plan Description'}</Label>
                                <Dropdown disable={false} />
                            </div>
                            <div>
                                <Label>{'Plan Type'}</Label>
                                <ToggleOption options={options} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.MainDivForPlanFeatures}>
                    <div className={style.HedingMainDiv}>
                        <HeadingTextH1 text={'Plan Features'} />
                    </div>
                    <div className={style.ManiDivForPlanInformationFild}>
                        {features.map((feature, index) => (
                            <div key={index}>
                                <div className={style.MainDivForFeturshOption}>
                                    <Label>{feature.label}</Label>
                                    <Input placeholder={feature.placeholder} />
                                </div>
                                {/* Conditionally render Delete button for all except the first feature */}
                                {index > 0 && (
                                    <Button
                                        className={style.AddIncomeBtm}
                                        type={"button"}
                                        text={"Delete"}
                                        onClick={() => handleDeleteFeature(index)}
                                    />
                                )}
                            </div>
                        ))}
                        <Button
                            className={style.AddIncomeBtm}
                            type={"button"}
                            text={"+ Add more"}
                            onClick={handleAddFeature}
                        />
                    </div>
                </div>

                <div className={style.MainDivForButtonCancelCreat}>
                    <Button className={style.CancelButton} type={"button"} text={"Cancel"} />
                    <Button type={"button"} text={"Create Plan"} />
                </div>
            </div>
        </>
    );
};

export default PlanFeatures;
