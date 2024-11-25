"use client";

import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export default function Dashboard() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Finova 대시보드</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* 차트 1: 주식시장 트렌드 */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
                        <h3 className="text-lg font-semibold mb-4">주식시장 트렌드</h3>
                        <Plot
                            data={[
                                { x: ["2023-11", "2023-12", "2024-01"], y: [100, 200, 150], type: "scatter", mode: "lines+markers" },
                            ]}
                            layout={{
                                title: "시장 트렌드",
                                paper_bgcolor: "transparent",
                                plot_bgcolor: "transparent",
                                font: { color: "white" },
                            }}
                        />
                    </div>

                    {/* 차트 2: 매출 예측 */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
                        <h3 className="text-lg font-semibold mb-4">매출 예측</h3>
                        <Plot
                            data={[
                                { labels: ["Q1", "Q2", "Q3", "Q4"], values: [10, 20, 30, 40], type: "pie" },
                            ]}
                            layout={{
                                title: "매출 비율",
                                paper_bgcolor: "transparent",
                                plot_bgcolor: "transparent",
                                font: { color: "white" },
                            }}
                        />
                    </div>

                    {/* 차트 3: 감정 분석 결과 */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
                        <h3 className="text-lg font-semibold mb-4">감정 분석 결과</h3>
                        <Plot
                            data={[
                                { x: ["긍정", "부정"], y: [75, 25], type: "bar" },
                            ]}
                            layout={{
                                title: "소셜 미디어 감정 분석",
                                paper_bgcolor: "transparent",
                                plot_bgcolor: "transparent",
                                font: { color: "white" },
                            }}
                        />
                    </div>

                    {/* 차트 4: 사용자 활동 */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
                        <h3 className="text-lg font-semibold mb-4">사용자 활동</h3>
                        <Plot
                            data={[
                                { x: ["1월", "2월", "3월"], y: [300, 500, 400], type: "line" },
                            ]}
                            layout={{
                                title: "활동 통계",
                                paper_bgcolor: "transparent",
                                plot_bgcolor: "transparent",
                                font: { color: "white" },
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
