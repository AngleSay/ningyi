import { useState } from 'react';
import { Menu, X, ChevronRight, Zap, Shield, Layers, Gauge } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium">首页</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium">公司简介</a>
            <a href="#products" className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium">产品</a>
            <a href="#advantages" className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium">优势</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium">联系</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden sm:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all">咨询</a>
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#home" className="text-gray-700 hover:text-orange-500 text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>首页</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>公司简介</a>
              <a href="#products" className="text-gray-700 hover:text-orange-500 text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>产品</a>
              <a href="#advantages" className="text-gray-700 hover:text-orange-500 text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>优势</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>联系</a>
              <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all text-center" onClick={() => setMobileMenuOpen(false)}>咨询</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-white via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-block">
                  <span className="text-orange-600 text-sm font-semibold bg-orange-100 px-4 py-2 rounded-full">创新科技</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  混凝土外加剂<br className="hidden sm:block" /><span className="text-orange-500">功能单体</span>专家
                </h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                  深耕混凝土外加剂功能单体领域，集技术研发、技术服务、产品销售于一体的科创型企业。为全球建筑行业提供高性能解决方案。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <a href="#products" className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all text-center flex items-center justify-center gap-2">
                  了解产品 <ChevronRight size={18} />
                </a>
                <a href="#contact" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all text-center">
                  获取方案
                </a>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663643772348/BRvHjRejK9aMLV9A57p5AK/hero-concrete-bridge-2YThq9ntHKmVvWgRKkALSQ.webp" alt="混凝土桥梁" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">企业简介</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">山西凝一科技有限公司，专业从事混凝土外加剂功能单体研发、生产和销售</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">关于凝一</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  山西凝一科技有限公司成立于2020年，是一家专业从事混凝土外加剂功能单体研发、生产和销售的高新技术企业。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  公司拥有一支由博士、硕士组成的研发团队，具有丰富的产品开发和应用经验，致力于为客户提供高性能、高质量的产品和服务。
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-orange-600">20+</p>
                  <p className="text-sm text-gray-600">产品系列</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-orange-600">100+</p>
                  <p className="text-sm text-gray-600">服务客户</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-orange-600">500+</p>
                  <p className="text-sm text-gray-600">工程案例</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl flex items-center justify-center min-h-80">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663643772348/BRvHjRejK9aMLV9A57p5AK/concrete-microstructure-dtgbpucAWzJAcY8anoteMh.webp" alt="混凝土微观结构" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">核心产品</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">减水母液用功能单体系列，满足不同工程需求</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Gauge, title: '降粘型', desc: '降低高强混凝土粘度，改善泵送施工性' },
              { icon: Shield, title: '抗裂型', desc: '增强混凝土抗裂性能，保障结构稳定性' },
              { icon: Layers, title: '增韧型', desc: '赋予混凝土更高韧性，承受更大应力' },
              { icon: Zap, title: '分散型', desc: '提高水泥颗粒分散性，性能更稳定' }
            ].map((product, idx) => {
              const Icon = product.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group cursor-pointer">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                    <Icon className="text-orange-500 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.desc}</p>
                  <a href={`/product/${idx + 1}`} className="inline-block mt-4 text-orange-500 hover:text-orange-600 font-medium text-sm flex items-center gap-1">
                    了解详情 <ChevronRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">为什么选择凝一</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">专业的技术实力和完善的服务体系</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '技术创新', desc: '自主知识产权核心技术' },
              { title: '专业团队', desc: '博士硕士研发团队' },
              { title: '质量保证', desc: 'ISO9001认证' },
              { title: '应用广泛', desc: '重大基础设施项目' }
            ].map((adv, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-orange-500 transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{adv.title}</h3>
                <p className="text-sm text-gray-600">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">联系我们</h2>
            <p className="text-base sm:text-lg text-gray-600">获取专业的解决方案</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">发送消息</h3>
              <form className="space-y-4">
                <input type="text" placeholder="姓名" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm" />
                <input type="email" placeholder="邮箱" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm" />
                <input type="tel" placeholder="电话" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm" />
                <textarea placeholder="消息" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm resize-none"></textarea>
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all text-sm">发送</button>
              </form>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">联系信息</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">📍</div>
                  <div>
                    <p className="font-semibold text-gray-900">地址</p>
                    <p className="text-sm text-gray-600">山西省吕梁市</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">📞</div>
                  <div>
                    <p className="font-semibold text-gray-900">电话</p>
                    <p className="text-sm text-gray-600">+86 (0)358-XXXX-XXXX</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">✉️</div>
                  <div>
                    <p className="font-semibold text-gray-900">邮箱</p>
                    <p className="text-sm text-gray-600">info@ningyi-tech.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8 sm:mb-12">
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">凝</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">凝一科技</p>
                  <p className="text-xs text-gray-500">混凝土外加剂专家</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed">为全球建筑行业提供高性能混凝土外加剂解决方案。</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">产品</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-orange-500 transition-colors">减水母液</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">保坍母液</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">关于</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-orange-500 transition-colors">公司简介</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">企业文化</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">服务</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-orange-500 transition-colors">技术支持</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">应用指导</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">联系</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-orange-500 transition-colors">联系我们</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">在线留言</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-500">© 2026 山西凝一科技有限公司. 保留所有权利。</p>
              <div className="flex gap-6 text-xs">
                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">隐私政策</a>
                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">服务条款</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
