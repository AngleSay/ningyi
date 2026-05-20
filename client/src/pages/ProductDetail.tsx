import { useRoute } from 'wouter';
import { ChevronLeft, CheckCircle } from 'lucide-react';

export default function ProductDetail() {
  const [match, params] = useRoute('/product/:id');

  const products = {
    '1': {
      name: '降粘型',
      subtitle: '高效流动性调节功能单体',
      description: '此功能单体可降低高强混凝土粘度，改善泵送施工性，提升施工效率与质量。',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663643772348/BRvHjRejK9aMLV9A57p5AK/concrete-lab-research-hsEbSCFWoDKgdJG4bfGNfJ.webp',
      features: [
        '显著降低混凝土粘度',
        '改善泵送施工性能',
        '提升施工效率',
        '保证混凝土质量',
        '适用于高强混凝土',
        '环保无污染'
      ],
      specifications: [
        { label: '外观', value: '白色至淡黄色粉末' },
        { label: '固含量', value: '≥95%' },
        { label: '水溶性', value: '完全溶解' },
        { label: '用量', value: '0.05-0.15%' }
      ],
      applications: ['高铁混凝土', '地铁工程', '高层建筑', '预制构件']
    },
    '2': {
      name: '抗裂型',
      subtitle: '混凝土裂纹控制功能单体',
      description: '能够有效增强混凝土抗裂性能，保障建筑结构的稳定性和耐久性。',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663643772348/BRvHjRejK9aMLV9A57p5AK/concrete-lab-research-hsEbSCFWoDKgdJG4bfGNfJ.webp',
      features: [
        '有效防止混凝土裂纹',
        '增强结构稳定性',
        '提高耐久性',
        '降低维护成本',
        '适用于恶劣环境',
        '长期性能稳定'
      ],
      specifications: [
        { label: '外观', value: '白色粉末' },
        { label: '固含量', value: '≥98%' },
        { label: '抗裂率', value: '≥85%' },
        { label: '用量', value: '0.08-0.20%' }
      ],
      applications: ['桥梁工程', '隧道工程', '水利工程', '地下室']
    },
    '3': {
      name: '增韧型',
      subtitle: '混凝土韧性增强功能单体',
      description: '赋予混凝土更高韧性，使其在复杂环境下能承受更大应力。',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663643772348/BRvHjRejK9aMLV9A57p5AK/concrete-lab-research-hsEbSCFWoDKgdJG4bfGNfJ.webp',
      features: [
        '显著提高混凝土韧性',
        '增强抗冲击能力',
        '适应复杂环境',
        '提高使用寿命',
        '减少脆性破坏',
        '性能可靠'
      ],
      specifications: [
        { label: '外观', value: '淡黄色粉末' },
        { label: '固含量', value: '≥96%' },
        { label: '韧性提升', value: '≥40%' },
        { label: '用量', value: '0.10-0.25%' }
      ],
      applications: ['机场跑道', '港口码头', '工业厂房', '防爆结构']
    },
    '4': {
      name: '分散型',
      subtitle: '水泥分散性增强功能单体',
      description: '显著提高水泥颗粒分散性，使混凝土搅拌更均匀，性能更稳定。',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663643772348/BRvHjRejK9aMLV9A57p5AK/concrete-lab-research-hsEbSCFWoDKgdJG4bfGNfJ.webp',
      features: [
        '提高水泥分散性',
        '均匀搅拌混凝土',
        '性能更加稳定',
        '降低成本',
        '提高生产效率',
        '易于操作'
      ],
      specifications: [
        { label: '外观', value: '白色粉末' },
        { label: '固含量', value: '≥97%' },
        { label: '分散率', value: '≥90%' },
        { label: '用量', value: '0.05-0.15%' }
      ],
      applications: ['商品混凝土', '预拌砂浆', '自流平地坪', '喷射混凝土']
    }
  };

  const product = products[params?.id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">产品未找到</h1>
          <a href="/" className="inline-block mt-6 text-orange-500 hover:text-orange-600 font-semibold">返回首页</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition-colors">
            <ChevronLeft size={20} />
            <span className="text-sm font-medium">返回</span>
          </a>
          <h1 className="text-lg font-bold text-gray-900">{product.name}</h1>
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-12 sm:pb-16 bg-gradient-to-b from-white via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <div>
                <span className="text-orange-600 text-sm font-semibold bg-orange-100 px-4 py-2 rounded-full">产品详情</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-4 mb-2">{product.name}</h1>
                <p className="text-lg text-gray-600">{product.subtitle}</p>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{product.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all text-center text-sm">获取样品</a>
                <a href="#contact" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-all text-center text-sm">技术咨询</a>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">产品特性</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                <CheckCircle className="text-orange-500 flex-shrink-0" size={24} />
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">技术指标</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.specifications.map((spec, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                <p className="text-sm text-gray-600 mb-2">{spec.label}</p>
                <p className="text-lg sm:text-xl font-bold text-gray-900">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">应用领域</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.applications.map((app, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-orange-500">
                <p className="text-gray-900 font-semibold">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">对此产品感兴趣？</h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">联系我们的技术团队，获取详细的产品信息和定制化解决方案</p>
          <a href="#contact" className="inline-block bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-all">立即咨询</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <p className="text-sm text-gray-500">© 2026 山西凝一科技有限公司. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
