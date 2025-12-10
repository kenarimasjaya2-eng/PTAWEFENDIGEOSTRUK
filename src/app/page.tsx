'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                <a href="#home" className="text-blue-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">About Us</a>
                <a href="#services" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Our Services</a>
                <a href="#portfolio" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Portfolio</a>
                <a href="#contact" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Contact Us</a>
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
              <a href="#home" className="text-blue-900 hover:text-yellow-600 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium">About Us</a>
              <a href="#services" className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium">Our Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium">Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium">Contact Us</a>
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
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 pt-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            {/* Company Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              PT AWEFENDI
              <span className="block text-yellow-400">GEOSTRUK INDONESIA</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Perusahaan Arsitektur Terpercaya yang Menghadirkan Solusi Desain Inovatif dan Fungsional
            </p>

            {/* Description */}
            <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Kami menggabungkan estetika, kenyamanan, dan efisiensi untuk menghasilkan bangunan yang memberikan nilai maksimal bagi klien
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Hubungi Kami
                  <ChevronRight className="w-5 h-5" />
                </span>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4 rounded-lg transition-all duration-300">
                Lihat Portfolio
              </Button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-white">
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="font-semibold mb-2">Lokasi Strategis</h3>
                <p className="text-sm text-blue-100">Balikpapan, Kalimantan Timur</p>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-white">
                <div className="flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="font-semibold mb-2">Konsultasi Gratis</h3>
                <p className="text-sm text-blue-100">0878-5104-4791</p>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-white">
                <div className="flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="font-semibold mb-2">Email Resmi</h3>
                <p className="text-sm text-blue-100">info@awefendigeostruk.com</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dengan profesionalisme dan integritas tinggi, kami siap menjadi mitra terpercaya dalam mewujudkan setiap ide menjadi ruang dan bangunan yang memiliki karakter, nilai, dan daya guna optimal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Tim Profesional</h3>
              <p className="text-gray-600">Didukung oleh tim arsitek berpengalaman dengan sertifikasi dan keahlian terbaik di bidangnya</p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Inovatif & Kreatif</h3>
              <p className="text-gray-600">Menggabungkan kreativitas, teknologi, dan standar teknis terbaik untuk hasil yang optimal</p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Komitmen Penuh</h3>
              <p className="text-gray-600">Dedikasi tinggi untuk setiap proyek dengan memprioritaskan kepuasan klien</p>
            </Card>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
}