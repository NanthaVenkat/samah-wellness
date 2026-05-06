import { Check } from "lucide-react";

const tableDatas = [
    {
        aspect: 'Holistic Approach (Mind, Body, Energy, Soul)',
        samah: true,
        treditionalCare: ''
    },
    {
        aspect: 'Integrated Wellness (All modalities in one space)',
        samah: true,
        treditionalCare: ''
    },
    {
        aspect: 'Personalised Journeys',
        samah: true,
        treditionalCare: ''
    },
    {
        aspect: 'Focus on Root Cause (not just symptoms)',
        samah: true,
        treditionalCare: 'Sometimes'
    },
    {
        aspect: 'Combination of Multiple Modalities',
        samah: true,
        treditionalCare: ''
    },
    {
        aspect: 'Preventive + Restorative Care',
        samah: true,
        treditionalCare: 'Sometimes'
    },
]

export default function ModelTable() {
    return (
        <>
            <section className="py-20">
                <div className="container text-center mx-auto px-4">
                    <h2 className="text-title text-[#8A8341]">why samah</h2>
                    <h1 className="text-title-xl text-[#68320A] max-w-[560px] mx-auto">A different model of care</h1>
                    <p className="text-[#3A391B] text-[clamp(0.85rem,0.98rem+0.2vw,1.125rem)] font-medium font-montserrat">
                        See how Samah compares to traditional wellness centres.
                    </p>

                    <div class="mt-8 overflow-auto">
                        <table className="model-table relative font-montserrat w-full text-lg font-medium">
                            <thead className="z-[2] relative font-albert text-[#1F1D1D]">
                                <tr className="">
                                    <th className="p-5">Aspect</th>
                                    <th className="p-5">Samah</th>
                                    <th className="p-5">Traditional Care</th>
                                </tr>
                            </thead>
                            <tbody className="z-[2] relative text-[#3A391B]">
                                {tableDatas.map((tableData, index) => (
                                    <tr key={index} className="relative">
                                        <td className="p-5 w-2/4">{tableData.aspect}</td>
                                        <td className="p-5 w-1/4 text-[#1F1D1D]">{tableData.samah ? <Check className="mx-auto" /> : ''}</td>
                                        <td className="p-5 w-1/4">{tableData.treditionalCare}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}