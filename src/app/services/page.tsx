'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Blueprint, Home, Building, Ruler, Eye, Monitor, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Services() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Blueprint className="w-8 h-8" />,
      title: "Konsep Desain",
      description: "Pengembangan konsep arsitektur yang kreatif dan inovatif sesuai kebutuhan klien",
      features: [
        "Analisis lokasi dan konteks",
        "Pengembangan konsep desain",
        "Study kelayakan dan feasibilitas",
        "Konsep desain awal dan pengembangan"
      ]
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Gambar Kerja Detail",
      description: "Dokumentasi teknis lengkap untuk pelaksanaan konstruksi yang akurat",
      features: [
        "Gambar arsitektur detail",
        "Denah, tampak, dan potongan",
        "Detail konstruksi dan material",
        "Spesifikasi teknis dan material"
      ]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Visualisasi 3D",
      description: "Presentasi visual yang realistis untuk memvisualisasikan hasil akhir proyek",
      features: [
        "Model 3D eksterior dan interior",
        "Render fotorealistis",
        "Virtual tour dan walkthrough",
        "Animasi 3D dan presentasi"
      ]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Perencanaan Tata Ruang",
      description: "Optimalisasi penggunaan ruang untuk fungsionalitas dan kenyamanan maksimal",
      features: [
        "Perencanaan tata letak ruang",
        "Analisis sirkulasi dan zonasi",
        "Desain interior dan furniture",
        "Optimalisasi pencahayaan dan ventilasi"
      ]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Desain Bangunan",
      description: "Desain komprehensif untuk berbagai jenis bangunan residential dan komersial",
      features: [
        "Desain rumah tinggal",
        "Bangunan komersial dan perkantoran",
        "Desain fasilitas publik",
        "Renovasi dan retrofitting"
      ]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Pengawasan Arsitektur",
      description: "Kontrol kualitas untuk memastikan pelaksanaan sesuai desain dan standar",
      features: [
        "Supervisi pelaksanaan konstruksi",
        "Kontrol kualitas material",
        "Verifikasi kesesuaian desain",
        "Laporan kemajuan proyek"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-blue-900">PT AWEFENDI GEOSTRUK INDONESIA</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="/about" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">About Us</a>
                <a href="/services" className="text-blue-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Our Services</a>
                <a href="/portfolio" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Portfolio</a>
                <a href="/contact" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Contact Us</a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                Hubungi Kami
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium">Home</a>
              <a href="/about" className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium">About Us</a>
              <a href="/services" className="text-blue-900 hover:text-yellow-600 block px-3 py-2 text-base font-medium">Our Services</a>
              <a href="/portfolio" className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium">Portfolio</a>
              <a href="/contact" className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium">Contact Us</a>
              <div className="px-3 py-2">
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Layanan Kami
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Solusi Arsitektur Komprehensif untuk Setiap Kebutuhan Bangunan Anda
          </p>
          <p className="text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Didukung oleh tim arsitek berpengalaman, kami menggabungkan kreativitas, teknologi, dan standar teknis terbaik untuk menghasilkan desain yang efektif dan tepat guna. Layanan kami mencakup pembuatan konsep desain, gambar kerja detail, visualisasi 3D, perencanaan tata ruang, hingga pengawasan arsitektur untuk memastikan setiap proyek berjalan sesuai rencana dan kualitas yang diharapkan.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center text-yellow-400 mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Proses Kerja Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Metodologi sistematis untuk memastikan hasil terbaik untuk setiap proyek
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Konsultasi", description: "Diskusi mendalam tentang kebutuhan dan visi klien" },
              { step: "02", title: "Konsep", description: "Pengembangan konsep desain awal berdasarkan brief" },
              { step: "03", title: "Desain", description: "Pembuatan gambar kerja dan visualisasi detail" },
              { step: "04", title: "Implementasi", description: "Pengawasan pelaksanaan hingga selesai" }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center text-yellow-400 text-2xl font-bold mx-auto mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-yellow-600 -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Mengapa Memilih Layanan Kami?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Tim Profesional Berpengalaman",
                    description: "Didukung oleh tim arsitek berpengalaman dengan sertifikasi dan keahlian terbaik"
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6" />,
                    title: "Kualitas Terjamin",
                    description: "Standar kualitas tinggi dalam setiap tahap perencanaan dan pelaksanaan"
                  },
                  {
                    icon: <Eye className="w-6 h-6" />,
                    title: "Desain Inovatif",
                    description: "Menggabungkan kreativitas, teknologi, dan standar teknis terbaik"
                  },
                  {
                    icon: <Monitor className="w-6 h-6" />,
                    title: "Teknologi Terkini",
                    description: "Menggunakan software dan teknologi terbaru untuk hasil yang presisi"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Blueprint className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Solusi Lengkap</h3>
                  <p className="text-gray-600">Dari konsep hingga realisasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Konsultasikan kebutuhan arsitektur Anda dengan tim profesional kami dan dapatkan solusi terbaik untuk proyek Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg px-8 py-4">
              <span className="flex items-center gap-2">
                Konsultasi Gratis
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4">
              Lihat Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}