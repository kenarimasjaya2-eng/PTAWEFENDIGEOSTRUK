'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Award, Users, Target, BookOpen, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function About() {
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
                <a href="/" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="/about" className="text-blue-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">About Us</a>
                <a href="/services" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Our Services</a>
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
              <a href="/about" className="text-blue-900 hover:text-yellow-600 block px-3 py-2 text-base font-medium">About Us</a>
              <a href="/services" className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium">Our Services</a>
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
            Tentang Kami
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Mengenal lebih dekat PT AWEFENDI GEOSTRUK INDONESIA
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Perusahaan Arsitektur Terpercaya
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                PT AWEFENDI GEOSTRUK INDONESIA adalah perusahaan yang bergerak di bidang Aktivitas Arsitektur yang berfokus pada layanan perencanaan, perancangan, serta pengembangan konsep bangunan yang inovatif dan fungsional.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kami menghadirkan solusi desain yang menggabungkan estetika, kenyamanan, dan efisiensi agar setiap proyek dapat memberikan nilai maksimal bagi klien. Dengan pengalaman bertahun-tahun di industri ini, kami telah membangun reputasi sebagai mitra terpercaya untuk berbagai proyek arsitektur.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Tim Profesional</h4>
                    <p className="text-sm text-gray-600">Arsitek berpengalaman</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Tersertifikasi</h4>
                    <p className="text-sm text-gray-600">Legalitas lengkap</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">PT AWEFENDI GEOSTRUK INDONESIA</h3>
                  <p className="text-gray-600">Solusi Arsitektur Terintegrasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Visi & Misi
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Landasan filosofi yang memandu setiap langkah kami dalam memberikan layanan terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Visi Kami</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Menjadi perusahaan arsitektur terdepan di Indonesia yang menghasilkan karya desain berkualitas tinggi, inovatif, dan berkelanjutan yang memberikan nilai tambah bagi masyarakat dan lingkungan.
              </p>
            </Card>

            <Card className="p-8 bg-white shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Misi Kami</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Menyediakan layanan arsitektur profesional dengan standar kualitas tertinggi</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Mengembangkan inovasi desain yang fungsional dan berkelanjutan</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Memberikan kepuasan maksimal kepada klien melalui pelayanan terbaik</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Membangun tim profesional yang terus berkembang dan berinovasi</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience & Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Pengalaman & Legalitas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Didukung dengan pengalaman dan sertifikasi yang lengkap untuk memberikan layanan terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Pengalaman Kami</h3>
              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-yellow-600">
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">Lebih dari 10 Tahun</h4>
                  <p className="text-gray-600">Pengalaman dalam industri arsitektur dan konstruksi</p>
                </Card>
                <Card className="p-6 border-l-4 border-yellow-600">
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">100+ Proyek</h4>
                  <p className="text-gray-600">Berbagai jenis proyek dari residential hingga komersial</p>
                </Card>
                <Card className="p-6 border-l-4 border-yellow-600">
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">Tim 50+ Profesional</h4>
                  <p className="text-gray-600">Arsitek, insinyur, dan tenaga ahli berpengalaman</p>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Legalitas & Sertifikasi</h3>
              <div className="space-y-6">
                <Card className="p-6 bg-gray-50">
                  <div className="flex items-start gap-4">
                    <Award className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Badan Usaha</h4>
                      <p className="text-gray-600">PT AWEFENDI GEOSTRUK INDONESIA terdaftar secara resmi sebagai badan hukum</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-gray-50">
                  <div className="flex items-start gap-4">
                    <Award className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Sertifikat Badan Usaha (SBU)</h4>
                      <p className="text-gray-600">Memiliki Sertifikat Badan Usaha Jasa Pelaksana Konstruksi</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-gray-50">
                  <div className="flex items-start gap-4">
                    <Award className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Izin Usaha Jasa Konstruksi</h4>
                      <p className="text-gray-600">Memenuhi semua persyaratan perizinan usaha di bidang jasa konstruksi</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Bekerja Sama dengan Kami?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Dengan profesionalisme dan integritas tinggi, kami siap menjadi mitra terpercaya dalam mewujudkan setiap ide menjadi ruang dan bangunan yang memiliki karakter, nilai, dan daya guna optimal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg px-8 py-4">
              Hubungi Kami Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4">
              Lihat Portfolio Kami
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}