// 'use client';
// import Back from '@/src/Component/Back/page';
// import Breadcrumb from '@/src/Component/Breadcrumb/page';
// import React, { useState } from 'react';
// import style from '../Component/setting.module.css';
// import { Label } from '@/src/Component/FormElement/Lable';
// import HeadingTextH1 from '@/src/Typography/text/HeadingTextH1';
// import Button from '@/src/Component/FormElement/Button';
// import { useRouter } from 'next/navigation';
// import Input from '@/src/Component/FormElement/Input';
// import { ic_Delete } from '@/src/Utils/svg';

// const EditManageDropdownItems = () => {
//     const router = useRouter();

//     const handleSave = () => {
//         const jsonData = {
//             year: selectedYear,
//             deductions: deductionFields,
//         };
//         console.log('Saved JSON Data:', jsonData);
//     };


//     const BackClick = () => {
//         router.push('/adminsettings');
//     };

//     return (
//         <>
//             <Back onClick={BackClick} text={'Edit Income type'} />
//             <Breadcrumb
//                 paths={[
//                     { name: 'Admin Settings', route: '/adminsettings' },
//                     { name: 'Edit Income type' },
//                 ]}
//             />
//             <div>
//                 <div className={style.EditMainDivTaxableIncomeRange}>
//                     <div className={style.HedingMainDiv}>
//                         <HeadingTextH1 text={'Income options'} />
//                     </div>
//                     <div className={style.MainDivForEditSd}>
//                         <div className={style.ManiDivForEditInformationFildSD}>
//                             <div>
//                                 <div className={style.EditMainDivForInputAndLableSectionSD}>
//                                     <div className={style.EditLebulManegeDivSD}>
//                                         <Label>{'Income Type'}</Label>
//                                         <Input
//                                             placeholder={'Salary'}
//                                             // value={field.standardDeduction}
//                                             onChange={(e) => e.target.value}
//                                         />
//                                     </div>
//                                     <div className={style.DeleteButton} onClick={() => handleDeleteField(index)}>
//                                         {ic_Delete.icon()}
//                                     </div>
//                                 </div>
//                                 <Button
//                                     className={style.AddIncomeBtmDI}
//                                     type={"button"}
//                                     text={"+ Add more"}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={style.MainDivForButtonCancelCreat}>
//                     <Button type={'button'} text={'Save'} onClick={handleSave} />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default EditManageDropdownItems;
'use client';
import Back from '@/src/Component/Back/page';
import Breadcrumb from '@/src/Component/Breadcrumb/page';
import React, { useState } from 'react';
import style from '../Component/setting.module.css';
import { Label } from '@/src/Component/FormElement/Lable';
import HeadingTextH1 from '@/src/Typography/text/HeadingTextH1';
import Button from '@/src/Component/FormElement/Button';
import { useRouter } from 'next/navigation';
import Input from '@/src/Component/FormElement/Input';
import { ic_Delete } from '@/src/Utils/svg';

const EditManageDropdownItems = () => {
    const router = useRouter();
    const [fields, setFields] = useState([{ incomeType: '' }]);

    const handleInputChange = (index, event) => {
        const values = [...fields];
        values[index].incomeType = event.target.value;
        setFields(values);
    };
    const handleAddField = () => {
        if (fields[fields.length - 1].incomeType.trim() !== '') {
            setFields([...fields, { incomeType: '' }]);
        } else {
            alert('Please enter a value before adding another field.');
        }
    };
    const handleDeleteField = (index) => {
        const values = [...fields];
        values.splice(index, 1);
        setFields(values);
    };
    const handleSave = () => {
        const jsonData = {
            fields: fields,
        };
        console.log('Saved JSON Data:', jsonData);
    };
    const BackClick = () => {
        router.push('/adminsettings');
    };
    return (
        <>
            <Back onClick={BackClick} text={'Edit Income type'} />
            <Breadcrumb
                paths={[
                    { name: 'Admin Settings', route: '/adminsettings' },
                    { name: 'Edit Income type' },
                ]}
            />
            <div>
                <div className={style.EditMainDivTaxableIncomeRange}>
                    <div className={style.HedingMainDiv}>
                        <HeadingTextH1 text={'Income options'} />
                    </div>
                    <div className={style.MainDivForEditSd}>
                        <div className={style.ManiDivForEditInformationFildSD}>
                            {fields.map((field, index) => (
                                <div key={index} className={style.EditMainDivForInputAndLableSectionDI}>
                                    <div className={style.EditLebulManegeDivSD}>
                                        <Label>{'Income Type'}</Label>
                                        <Input
                                            placeholder={'Enter Income Type'}
                                            value={field.incomeType}
                                            onChange={(e) => handleInputChange(index, e)}
                                        />
                                    </div>

                                    {fields.length > 1 && (
                                        <div
                                            className={style.DeleteButton}
                                            onClick={() => handleDeleteField(index)}
                                        >
                                            {ic_Delete.icon()}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Button
                                className={style.AddIncomeBtmDI}
                                type="button"
                                text="+ Add more"
                                onClick={handleAddField}
                            />
                        </div>
                    </div>
                </div>
                <div className={style.MainDivForButtonCancelCreat}>
                    <Button type="button" text="Save" onClick={handleSave} />
                </div>
            </div>
        </>
    );
};

export default EditManageDropdownItems;