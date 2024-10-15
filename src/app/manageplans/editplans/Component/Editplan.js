'use client'
import React, { useState } from 'react';
import Back from '@/src/Component/Back/page';
import HeadingTextH1 from '@/src/Typography/text/HeadingTextH1';
import { Label } from '@/src/Component/FormElement/Lable';
import Input from '@/src/Component/FormElement/Input';
import InputNum from '@/src/Component/FormElement/InputNum';
import Dropdown from '@/src/Component/FormElement/Dropdown';
import ToggleOption from '@/src/Component/FormElement/ToggleOption';
import style from './editplan.module.css';
import Button from '@/src/Component/FormElement/Button';
import { ic_Delete } from '@/src/Utils/svg';
import Breadcrumb from '@/src/Component/Breadcrumb/page';
import { useRouter } from 'next/navigation';

const Editplan = () => {
    const router = useRouter();
    const options = [
        { label: "Monthly", value: "Monthly" },
        { label: "Yearly", value: "Yearly" },
    ];
    const [planTitle, setPlanTitle] = useState('');
    const [planAmount, setPlanAmount] = useState('');
    const [planDescription, setPlanDescription] = useState('');
    const [planDuration, setPlanDuration] = useState('');
    const [planType, setPlanType] = useState(options[0].value);
    const [features, setFeatures] = useState([{ label: 'Feature 1', placeholder: 'Basic Tax Optimization', value: '' }]);



    const handleAddFeature = () => {
        if (features[features.length - 1].value.trim() !== '') {
            setFeatures(prev => [
                ...prev,
                { label: `Feature ${prev.length + 1}`, placeholder: 'New Feature Description', value: '' }
            ]);
        } else {
            alert('Please fill out the current feature before adding a new one.');
        }
    };

    const handleDeleteFeature = (indexToDelete) => {
        if (features.length > 1) {
            const updatedFeatures = features.filter((_, index) => index !== indexToDelete);

            const reLabeledFeatures = updatedFeatures.map((feature, index) => ({
                ...feature,
                label: `Feature ${index + 1}`
            }));

            setFeatures(reLabeledFeatures);
        }
    };

    const handleInputChange = (index, value) => {
        const updatedFeatures = [...features];
        updatedFeatures[index].value = value;
        setFeatures(updatedFeatures);
    };

    const handleCreatePlan = () => {
        const planData = {
            title: planTitle,
            amount: planAmount,
            description: planDescription,
            duration: planDuration,
            type: planType,
            features: features.map(f => f.value)
        };

        console.log(JSON.stringify(planData, null, 2));
    };

    const handleResetForm = () => {
        setPlanTitle('');
        setPlanAmount('');
        setPlanDescription('');
        setPlanDuration('');
        setPlanType(options[0].value);
        setFeatures([{ label: 'Feature 1', placeholder: 'Basic Tax Optimization', value: '' }]);
    };

    const BackClick = () => {
        router.push('/manageplans');
    }

    return (
        <>
            <Back text={'Edit Plans'} onClick={() => BackClick()} />
            <Breadcrumb
                paths={[
                    { name: "Manage Plans", route: "/manageplans" },
                    { name: "Edit Plan" }
                ]}
            />
            <div>
                <div className={style.MainDivForPlanInformation}>
                    <div className={style.HedingMainDiv}>
                        <HeadingTextH1 text={'Plan Information'} />
                    </div>
                    <div className={style.ManiDivForPlanInformationFild}>
                        <div className={style.MainDivForPlanTitle}>
                            <div className={style.ManageWidthPlanTitle}>
                                <Label>{'Plan Title'}</Label>
                                <Input
                                    placeholder={'Eg: Premium'}
                                    value={planTitle}
                                    onChange={(e) => setPlanTitle(e.target.value)}
                                />
                            </div>
                            <div className={style.ManageWidthPlanTitle}>
                                <Label>{'Plan Amount'}</Label>
                                <InputNum
                                    placeholder={'Eg: $24K'}
                                    value={planAmount}
                                    onChange={(e) => setPlanAmount(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={style.MainDivForDescriptionPlan}>
                            <Label>{'Plan Description'}</Label>
                            <Input
                                placeholder={'Eg. This is the best plan for professional CA'}
                                value={planDescription}
                                onChange={(e) => setPlanDescription(e.target.value)}
                            />
                        </div>
                        <div className={style.MainDivForPlanType}>
                            <div>
                                <Label>{'Select Duration'}</Label>
                                <Dropdown
                                    disable={false}
                                    value={planDuration}
                                    onChange={(e) => setPlanDuration(e.target.value)}
                                />
                            </div>
                            <div>
                                <Label>{'Plan Type'}</Label>
                                <ToggleOption
                                    options={options}
                                    value={planType}
                                    onChange={setPlanType}
                                />
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
                            <div key={index} className={style.MainDivForfeatureAndDelete}>
                                <div className={style.MainDivForFeturshOption}>
                                    <Label>{feature.label}</Label>
                                    <Input
                                        placeholder={feature.placeholder}
                                        value={feature.value}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                    />
                                </div>
                                {features.length > 1 && (
                                    <div className={style.DeleteButton} onClick={() => handleDeleteFeature(index)}>
                                        {ic_Delete.icon()}
                                    </div>
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
                    <Button
                        className={style.CancelButton}
                        type={"button"}
                        text={"Cancel"}
                        onClick={handleResetForm}
                    />
                    <Button
                        type={"button"}
                        text={"Create Plan"}
                        onClick={handleCreatePlan}
                    />
                </div>
            </div>
        </>
    );
};

export default Editplan;
