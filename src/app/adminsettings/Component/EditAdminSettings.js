// 'use client'
// import Back from '@/src/Component/Back/page'
// import Breadcrumb from '@/src/Component/Breadcrumb/page'
// import React, { useState } from 'react'
// import style from './setting.module.css'
// import { Label } from '@/src/Component/FormElement/Lable'
// import Dropdown from '@/src/Component/FormElement/Dropdown'
// import HeadingTextH1 from '@/src/Typography/text/HeadingTextH1'
// import Input from '@/src/Component/FormElement/Input'
// import { ic_Delete } from '@/src/Utils/svg'
// import InputNum from '@/src/Component/FormElement/InputNum'
// import Button from '@/src/Component/FormElement/Button'


// const EditAdminSettings = () => {
//     const currentYear = new Date().getFullYear();
//     const [selectedYear, setSelectedYear] = useState(currentYear);
//     const [activeStatus, setActiveStatus] = useState('MarriedFilingJointly');



//     const yearOptions = Array.from(new Array(50), (val, index) => ({
//         name: (currentYear - index).toString(),
//         value: currentYear - index,
//     }));


//     const Status = [
//         { value: 'MarriedFilingJointly', name: 'Married Filing Jointly' },
//         { value: 'Single', name: 'Single' },
//         { value: 'MarriedFilingSeprately', name: 'Married Filing Seprately' },
//         { value: 'HeadOfHousehold', name: 'Head Of Household' }
//     ];

//     return (
//         <>
//             <Back text={'Edit Federal Tax Bracket'} />
//             <Breadcrumb
//                 paths={[
//                     { name: "Admin Settings", route: "/adminsettings" },
//                     { name: "Edit Federal Tax" }
//                 ]}
//             />
//             <div>
//                 <div className={style.EditMainDivForHederContent}>
//                     <div className={style.EditMainDivForYearAndStatus}>
//                         <div>
//                             <Label className={style.EditLable}>{'Select Year'}</Label>
//                             <Dropdown
//                                 data={yearOptions}
//                                 value={selectedYear}
//                                 setValue={setSelectedYear}
//                                 className={style.DropDownValiue}
//                                 disable={false}
//                             />
//                         </div>
//                         <div>
//                             <Label className={style.EditLable}>{'Status'}</Label>
//                             <Dropdown
//                                 data={Status}
//                                 value={activeStatus}
//                                 setValue={setActiveStatus}
//                                 className={style.DropDownValiueStatus}
//                                 disable={false}
//                             />
//                         </div>
//                         <span className={style.EditLastModifyDev}>Last modified on 24/02/2023</span>
//                     </div>
//                 </div>
//                 <div className={style.EditMainDivTaxableIncomeRange}>
//                     <div className={style.HedingMainDiv}>
//                         <HeadingTextH1 text={'Plan Information'} />
//                     </div>
//                     <div className={style.ManiDivForEditInformationFild}>
//                         <div className={style.EditMainDivForInputAndLableSection}>
//                             <div className={style.EditLebulManegeDiv}>
//                                 <Label>{'From'}</Label>
//                                 <InputNum
//                                     placeholder={'$0.00'}
//                                 // value={planAmount}
//                                 // onChange={(e) => setPlanAmount(e.target.value)}
//                                 />
//                             </div>
//                             <div className={style.EditLebulManegeDiv}>
//                                 <Label>{'to'}</Label>
//                                 <InputNum
//                                     placeholder={'$11,600'}
//                                 // value={planAmount}
//                                 // onChange={(e) => setPlanAmount(e.target.value)}
//                                 />
//                             </div>
//                             <div className={style.EditLebulManegeDivSecond}>
//                                 <Label>{'Tax Rate'}</Label>
//                                 <InputNum
//                                     placeholder={'10%'}
//                                 // value={planAmount}
//                                 // onChange={(e) => setPlanAmount(e.target.value)}
//                                 />
//                             </div>
//                             <div className={style.DeleteButton} >
//                                 {ic_Delete.icon()}
//                             </div>
//                         </div>
//                         <div className={style.EditMainDivForCheckboxManage}>
//                             <input
//                                 type='checkbox'
//                             />
//                             <Label>{'No Upper Limit'}</Label>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={style.MainDivForAddButtonEdit}>
//                     <Button
//                         className={style.AddIncomeBtm}
//                         type={"button"}
//                         text={"+ Add more"}
//                     // onClick={handleAddFeature}
//                     />
//                 </div>
//                 <div className={style.MainDivForButtonCancelCreat}>
//                     <Button
//                         className={style.CancelButton}
//                         type={"button"}
//                         text={"Cancel"}
//                     // onClick={handleResetForm}
//                     />
//                     <Button
//                         type={"button"}
//                         text={"Save"}
//                     // onClick={handleCreatePlan}
//                     />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default EditAdminSettings
'use client'
import Back from '@/src/Component/Back/page'
import Breadcrumb from '@/src/Component/Breadcrumb/page'
import React, { useState } from 'react'
import style from './setting.module.css'
import { Label } from '@/src/Component/FormElement/Lable'
import Dropdown from '@/src/Component/FormElement/Dropdown'
import HeadingTextH1 from '@/src/Typography/text/HeadingTextH1'
import InputNum from '@/src/Component/FormElement/InputNum'
import Button from '@/src/Component/FormElement/Button'
import { ic_Delete } from '@/src/Utils/svg'
import { useRouter } from 'next/navigation'

const EditAdminSettings = () => {
    const currentYear = new Date().getFullYear();
    const router = useRouter()

    const initialTaxFields = [{ from: '', to: '', taxRate: '', noUpperLimit: false }];

    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [activeStatus, setActiveStatus] = useState('MarriedFilingJointly');
    const [taxFields, setTaxFields] = useState(initialTaxFields);

    const handleAddField = () => {
        const lastField = taxFields[taxFields.length - 1];

        if (lastField.from && lastField.to && lastField.taxRate) {
            setTaxFields([...taxFields, { from: '', to: '', taxRate: '', noUpperLimit: false }]);
        } else {
            alert('Please fill out the current fields before adding new ones.');
        }
    };

    const handleFieldChange = (index, field, value) => {
        const updatedFields = [...taxFields];
        updatedFields[index][field] = value;
        setTaxFields(updatedFields);
    };

    const handleCheckboxChange = (index) => {
        const updatedFields = [...taxFields];
        updatedFields[index].noUpperLimit = !updatedFields[index].noUpperLimit;
        setTaxFields(updatedFields);
    };

    const handleDeleteField = (index) => {
        const updatedFields = [...taxFields];
        updatedFields.splice(index, 1);
        setTaxFields(updatedFields);
    };

    const isAnyCheckboxChecked = taxFields.some(field => field.noUpperLimit);

    const yearOptions = Array.from(new Array(50), (val, index) => ({
        name: (currentYear - index).toString(),
        value: currentYear - index,
    }));

    const Status = [
        { value: 'MarriedFilingJointly', name: 'Married Filing Jointly' },
        { value: 'Single', name: 'Single' },
        { value: 'MarriedFilingSeprately', name: 'Married Filing Seprately' },
        { value: 'HeadOfHousehold', name: 'Head Of Household' }
    ];

    const handleSave = () => {
        const jsonData = {
            selectedYear,
            activeStatus,
            taxFields,
        };
        console.log(JSON.stringify(jsonData, null, 2));
    };

    const handleResetForm = () => {
        setSelectedYear(currentYear);
        setActiveStatus('MarriedFilingJointly');
        setTaxFields(initialTaxFields);
    };
    const BackClick = () => {
        router.push('/adminsettings')
    }
    return (
        <>
            <Back onClick={() => BackClick()} text={'Edit Federal Tax Bracket'} />
            <Breadcrumb
                paths={[
                    { name: "Admin Settings", route: "/adminsettings" },
                    { name: "Edit Federal Tax" }
                ]}
            />
            <div>
                <div className={style.EditMainDivForHederContent}>
                    <div className={style.EditMainDivForYearAndStatus}>
                        <div>
                            <Label className={style.EditLable}>{'Select Year'}</Label>
                            <Dropdown
                                data={yearOptions}
                                value={selectedYear}
                                setValue={setSelectedYear}
                                className={style.DropDownValiue}
                                disable={false}
                            />
                        </div>
                        <div>
                            <Label className={style.EditLable}>{'Status'}</Label>
                            <Dropdown
                                data={Status}
                                value={activeStatus}
                                setValue={setActiveStatus}
                                className={style.DropDownValiueStatus}
                                disable={false}
                            />
                        </div>
                        <span className={style.EditLastModifyDev}>Last modified on 24/02/2023</span>
                    </div>
                </div>

                <div className={style.EditMainDivTaxableIncomeRange}>
                    <div className={style.HedingMainDiv}>
                        <HeadingTextH1 text={'Plan Information'} />
                    </div>

                    <div className={style.ManiDivForEditInformationFild}>
                        {taxFields.map((field, index) => (
                            <div key={index}>
                                <div className={style.EditMainDivForInputAndLableSection}>
                                    <div className={style.EditLebulManegeDiv}>
                                        <Label>{'From'}</Label>
                                        <InputNum
                                            placeholder={'$0.00'}
                                            value={field.from}
                                            onChange={(e) => handleFieldChange(index, 'from', e.target.value)}
                                        />
                                    </div>
                                    <div className={style.EditLebulManegeDiv}>
                                        <Label>{'To'}</Label>
                                        <InputNum
                                            placeholder={'$11,600'}
                                            value={field.to}
                                            onChange={(e) => handleFieldChange(index, 'to', e.target.value)}
                                        />
                                    </div>
                                    <div className={style.EditLebulManegeDivSecond}>
                                        <Label>{'Tax Rate'}</Label>
                                        <InputNum
                                            placeholder={'10%'}
                                            value={field.taxRate}
                                            onChange={(e) => handleFieldChange(index, 'taxRate', e.target.value)}
                                        />
                                    </div>
                                    {taxFields.length > 1 && (
                                        <div className={style.DeleteButton} onClick={() => handleDeleteField(index)}>
                                            {ic_Delete.icon()}
                                        </div>
                                    )}
                                </div>
                                {index === taxFields.length - 1 && (
                                    <div className={style.EditMainDivForCheckboxManage}>
                                        <input
                                            type='checkbox'
                                            checked={field.noUpperLimit}
                                            onChange={() => handleCheckboxChange(index)}
                                        />
                                        <Label>{'No Upper Limit'}</Label>
                                    </div>
                                )}
                            </div>
                        ))}

                        {!isAnyCheckboxChecked && (
                            <Button
                                className={style.AddIncomeBtm}
                                type={"button"}
                                text={"+ Add more"}
                                onClick={handleAddField}
                            />
                        )}
                    </div>
                </div>

                <div className={style.MainDivForButtonCancelCreat}>
                    <Button
                        className={style.CancelButton}
                        type={"button"}
                        text={"Cancel"}
                        onClick={handleResetForm}
                    />
                    <Button
                        type={"button"}
                        text={"Save"}
                        onClick={handleSave}
                    />
                </div>
            </div>
        </>
    );
}

export default EditAdminSettings;
