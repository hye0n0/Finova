export default function Features() {
    const features = [
        { icon: "📈", title: "실시간 예측", description: "데이터 기반 금융 예측 제공" },
        { icon: "💬", title: "텍스트 분석", description: "소셜 미디어 감정 분석" },
        { icon: "🤝", title: "추천 시스템", description: "사용자 맞춤 추천 제공" },
        { icon: "📊", title: "데이터 시각화", description: "손쉽게 통찰 발견" },
    ];

    return (
        <section id="features" className="py-16 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">핵심 기능</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded shadow hover:shadow-lg transition transform hover:scale-105 text-center"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
