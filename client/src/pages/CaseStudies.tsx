import { useState } from 'react';
import { ChevronRight, MapPin, Calendar, Award } from 'lucide-react';

export default function CaseStudies() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const cases = [
    {
      id: 1,
      title: '京沪高铁混凝土工程',
      category: 'railway',
      location: '北京-上海',
      year: '2022-2023',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663643772348/BRvHjRejK9aMLV9A57p5AK/china-high-speed-rail-W8sMYhJi4ANrNMGRiCbMmw.webp',
      description: '为京沪高铁提供高性能混凝土外加剂，确保混凝土强度和耐久性。总用量超过5000吨。',
      results: ['强度提升15%', '耐久性增强', '施工效率提高20%'],
      products: ['降粘型', '抗裂型']
    },
    {
      id: 2,
      title: '深圳地铁隧道工程',
      category: 'metro',
      location: '深圳',
      year: '2023',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663643772348/BRvHjRejK9aMLV9A57p5AK/subway-tunnel-concrete-iLynJVnfqqEmoLrwyRHkc3.webp',
      description: '为深圳地铁10号线提供专业的混凝土外加剂解决方案，确保隧道混凝土的防水性能。',
      results: ['防水等级达到P12', '裂缝率降低80%', '施工周期缩短15天'],
      products: ['抗裂型', '增韧型']
    },
    {
      id: 3,
      title: '杭州湾跨海大桥加固',
      category: 'bridge',
      location: '浙江',
      year: '2022',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663643772348/BRvHjRejK9aMLV9A57p5AK/bridge-foundation-concrete-FjYZzPLofJfBWtdLo7wxE5.webp',
      description: '为杭州湾跨海大桥提供高性能混凝土外加剂，增强混凝土的抗盐碱性和耐久性。',
      results: ['盐碱抗性提升25%', '耐久年限延长50年', '维护成本降低30%'],
      products: ['抗裂型', '分散型']
    },
    {
      id: 4,
      title: '成都地铁混凝土工程',
      category: 'metro',
      location: '成都',
      year: '2023',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663643772348/BRvHjRejK9aMLV9A57p5AK/concrete-quality-lab-6ikN5Knpx2VyDLAsc59BAU.webp',
      description: '为成都地铁7号线提供混凝土外加剂，确保高质量的混凝土施工。',
      results: ['混凝土强度均匀性提高', '施工质量优秀率99%', '用户满意度98%'],
      products: ['降粘型', '分散型']
    },
    {
      id: 5,
      title: '武汉长江大桥维修',
      category: 'bridge',
      location: '湖北',
      year: '2021-2022',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663643772348/BRvHjRejK9aMLV9A57p5AK/china-high-speed-rail-W8sMYhJi4ANrNMGRiCbMmw.webp',
      description: '为武汉长江大桥的维修加固提供专业的混凝土外加剂，确保结构安全。',
      results: ['承载能力恢复95%', '使用寿命延长30年', '维修成本节省20%'],
      products: ['抗裂型', '增韧型']
    },
    {
      id: 6,
      title: '南京地铁混凝土工程',
      category: 'metro',
      location: '南京',
      year: '2023',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663643772348/BRvHjRejK9aMLV9A57p5AK/subway-tunnel-concrete-iLynJVnfqqEmoLrwyRHkc3.webp',
      description: '为南京地铁8号线提供高性能混凝土外加剂，确保混凝土的流动性和强度。',
      results: ['混凝土流动性提升18%', '强度提升12%', '成本节省15%'],
      products: ['降粘型', '分散型']
    }
  ];

  const categories = [
    { id: 'all', name: '全部案例' },
    { id: 'railway', name: '高铁工程' },
    { id: 'metro', name: '地铁工程' },
    { id: 'bridge', name: '桥梁工程' }
  ];

  const filteredCases = selectedCategory === 'all' 
    ? cases 
    : cases.filter(c => c.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">凝</span>
            </div>
            <div>
              <h1 className="text-base font-bold text-gray-900">凝一科技</h1>
              <p className="text-xs text-gray-500">混凝土外加剂专家</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium">首页</a>
            <a href="/#about" className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium">公司简介</a>
            <a href="/#products" className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium">产品</a>
            <a href="/cases" className="text-orange-500 font-medium text-sm">案例</a>
            <a href="/#contact" className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium">联系</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="/#contact" className="hidden sm:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all">咨询</a>
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="/" className="text-gray-700 hover:text-orange-500 text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>首页</a>
              <a href="/#about" className="text-gray-700 hover:text-orange-500 text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>公司简介</a>
              <a href="/#products" className="text-gray-700 hover:text-orange-500 text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>产品</a>
              <a href="/cases" className="text-orange-500 font-medium text-sm py-2" onClick={() => setMobileMenuOpen(false)}>案例</a>
              <a href="/#contact" className="text-gray-700 hover:text-orange-500 text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>联系</a>
              <a href="/#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all text-center" onClick={() => setMobileMenuOpen(false)}>咨询</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-white via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              工程案例库
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              见证凝一科技在全国重大工程中的卓越表现
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseItem, idx) => (
              <div
                key={caseItem.id}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                }}
              >
                <style>{`
                  @keyframes fadeInUp {
                    from {
                      opacity: 0;
                      transform: translateY(20px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-2">{caseItem.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} className="text-orange-500" />
                      {caseItem.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} className="text-orange-500" />
                      {caseItem.year}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-2">{caseItem.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">主要成果</h4>
                    <ul className="space-y-1">
                      {caseItem.results.map((result, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                          <Award size={14} className="text-orange-500" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {caseItem.products.map(product => (
                      <span
                        key={product}
                        className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            您的项目需要我们的支持吗？
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            凝一科技拥有丰富的工程经验，为您的项目提供专业的混凝土外加剂解决方案
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all"
          >
            立即咨询 <ChevronRight size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">关于凝一</h3>
              <p className="text-sm">专业的混凝土外加剂功能单体研发、生产和销售企业</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">产品</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/#products" className="hover:text-white transition-colors">降粘型</a></li>
                <li><a href="/#products" className="hover:text-white transition-colors">抗裂型</a></li>
                <li><a href="/#products" className="hover:text-white transition-colors">增韧型</a></li>
                <li><a href="/#products" className="hover:text-white transition-colors">分散型</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">服务</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/cases" className="hover:text-white transition-colors">工程案例</a></li>
                <li><a href="/#advantages" className="hover:text-white transition-colors">技术优势</a></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">技术支持</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">联系方式</h3>
              <p className="text-sm mb-2">山西凝一科技有限公司</p>
              <p className="text-sm">电话: +86 (0)358-XXXX-XXXX</p>
              <p className="text-sm">邮箱: info@ningyi-tech.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 山西凝一科技有限公司 | 版权所有</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
