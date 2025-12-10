'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Shield, Eye, Database, UserCheck, Cookie, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Privacy() {
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
                <a href="/about" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">About Us</a>
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
              <a href="/about" className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium">About Us</a>
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
          <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kebijakan Privasi
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Perlindungan Data Pribadi Sesuai Standar Internasional GDPR
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Pendahuluan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                PT AWEFENDI GEOSTRUK INDONESIA ("kami", "perusahaan") berkomitmen untuk melindungi privasi dan keamanan data pribadi pengguna website kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda saat Anda mengunjungi website www.awefendigeostruk.com.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Kebijakan ini dirancang untuk mematuhi Peraturan Perlindungan Data Pribadi Indonesia serta standar internasional seperti General Data Protection Regulation (GDPR) Uni Eropa.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Informasi yang Kami Kumpulkan</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <UserCheck className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-3">Data yang Diberikan Secara Sukarela</h3>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Nama lengkap</li>
                        <li>• Alamat email</li>
                        <li>• Nomor telepon</li>
                        <li>• Nama perusahaan</li>
                        <li>• Informasi proyek</li>
                        <li>• Pesan atau pertanyaan</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Database className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-3">Data yang Dikumpulkan Otomatis</h3>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Alamat IP</li>
                        <li>• Jenis browser dan perangkat</li>
                        <li>• Sistem operasi</li>
                        <li>• Halaman yang dikunjungi</li>
                        <li>• Waktu dan durasi kunjungan</li>
                        <li>• Data analytics dan performa</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Cara Kami Menggunakan Informasi Anda</h2>
              
              <div className="bg-blue-50 rounded-lg p-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Kami menggunakan informasi pribadi Anda untuk tujuan berikut:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Merespons pertanyaan dan permintaan Anda",
                    "Memberikan layanan konsultasi arsitektur",
                    "Mengirim informasi tentang layanan kami",
                    "Mengelola hubungan bisnis dengan klien",
                    "Meningkatkan kualitas layanan dan website",
                    "Mematuhi kewajiban hukum dan peraturan",
                    "Mencegah penipuan dan aktivitas ilegal",
                    "Analisis statistik dan penelitian internal"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legal Basis */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Dasar Hukum Pemrosesan Data</h2>
              
              <Card className="p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Kami hanya memproses data pribadi Anda jika memiliki dasar hukum yang sah sesuai dengan peraturan yang berlaku:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-400 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Konsen</h4>
                      <p className="text-gray-600">Anda memberikan persetujuan eksplisit untuk kami memproses data Anda untuk tujuan tertentu.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-400 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Kontrak</h4>
                      <p className="text-gray-600">Pemrosesan data diperlukan untuk pelaksanaan kontrak layanan dengan Anda.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-400 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Kewajiban Hukum</h4>
                      <p className="text-gray-600">Kami diwajibkan oleh hukum untuk memproses data Anda untuk tujuan tertentu.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-400 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Kepentingan Sah</h4>
                      <p className="text-gray-600">Pemrosesan data diperlukan untuk kepentingan sah kami yang tidak melanggar hak privasi Anda.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Pembagian Data Pihak Ketiga</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga untuk tujuan komersial tanpa persetujuan Anda. Kami hanya membagi data Anda dalam situasi berikut:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Penyedia Layanan</h4>
                  <p className="text-gray-600 text-sm">Kami bekerja sama dengan penyedia layanan terpercaya untuk hosting website, email marketing, dan analytics yang memiliki komitmen privasi yang sama.</p>
                </Card>
                
                <Card className="p-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Kewajiban Hukum</h4>
                  <p className="text-gray-600 text-sm">Kami dapat membagi data Anda jika diwajibkan oleh hukum, perintah pengadilan, atau permintaan dari pihak berwenang.</p>
                </Card>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Keamanan Data</h2>
              
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <Lock className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi data pribadi Anda dari akses tidak sah, perubahan, pengungkapan, atau penghancuran yang tidak sah.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Enkripsi data saat transmisi dan penyimpanan</li>
                      <li>• Akses terbatas ke data pribadi</li>
                      <li>• Firewall dan sistem deteksi intrusi</li>
                      <li>• Backup data rutin dan aman</li>
                      <li>• Pelatihan staf tentang keamanan data</li>
                      <li>• Audit keamanan berkala</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Hak Privasi Anda</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Eye className="w-6 h-6" />,
                    title: "Hak Akses",
                    description: "Hak untuk mengetahui data pribadi apa yang kami simpan tentang Anda."
                  },
                  {
                    icon: <Database className="w-6 h-6" />,
                    title: "Hak Koreksi",
                    description: "Hak untuk memperbaiki data pribadi yang tidak akurat atau tidak lengkap."
                  },
                  {
                    icon: <UserCheck className="w-6 h-6" />,
                    title: "Hak Penghapusan",
                    description: "Hak untuk meminta penghapusan data pribadi Anda dalam kondisi tertentu."
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Hak Pembatasan",
                    description: "Hak untuk membatasi pemrosesan data pribadi Anda."
                  }
                ].map((right, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-yellow-400 flex-shrink-0">
                        {right.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">{right.title}</h4>
                        <p className="text-gray-600 text-sm">{right.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Kebijakan Cookie</h2>
              
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <Cookie className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Website kami menggunakan cookie dan teknologi pelacakan serupa untuk meningkatkan pengalaman pengguna dan menganalisis traffic website.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Cookie yang Kami Gunakan:</h4>
                        <ul className="text-gray-600 space-y-2 ml-4">
                          <li>• <strong>Cookie Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                          <li>• <strong>Cookie Analytics:</strong> Membantu kami memahami cara pengguna menggunakan website</li>
                          <li>• <strong>Cookie Fungsional:</strong> Mengingat preferensi dan pengaturan Anda</li>
                          <li>• <strong>Cookie Pemasaran:</strong> Digunakan untuk menampilkan iklan yang relevan</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Mengelola Cookie:</h4>
                        <p className="text-gray-600">
                          Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda. Namun, menonaktifkan cookie esensial dapat mempengaruhi fungsionalitas website.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* International Data Transfers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Transfer Data Internasional</h2>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <p className="text-gray-700 leading-relaxed">
                  Data pribadi Anda mungkin ditransfer ke dan diproses di negara lain selain Indonesia. Kami memastikan transfer data internasional dilakukan dengan perlindungan yang sesuai dan mematuhi standar GDPR dan peraturan perlindungan data yang berlaku.
                </p>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Pembaruan Kebijakan</h2>
              
              <p className="text-gray-600 leading-relaxed">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau perubahan peraturan yang berlaku. Versi terbaru akan selalu tersedia di website kami dan kami akan memberitahukan perubahan material melalui email atau pemberitahuan di website.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Hubungi Kami</h2>
              
              <Card className="p-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                <p className="text-blue-100 leading-relaxed mb-6">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak privasi Anda, silakan hubungi kami:
                </p>
                
                <div className="space-y-3">
                  <p><strong>Email:</strong> privacy@awefendigeostruk.com</p>
                  <p><strong>Telepon:</strong> 0878-5104-4791</p>
                  <p><strong>Alamat:</strong> Jalan Soekarno Hatta KM.8 Perumahan Graha Poltekba Blok C No.9, Batu Ampar, Balikpapan, Kalimantan Timur 76136</p>
                </div>
                
                <div className="mt-6">
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                    Hubungi Privacy Officer
                  </Button>
                </div>
              </Card>
            </div>

            {/* Last Updated */}
            <div className="text-center py-8 border-t">
              <p className="text-gray-500">
                Kebijakan Privasi ini berlaku efektif sejak: <strong>1 Januari 2024</strong>
              </p>
              <p className="text-gray-500 mt-2">
                Terakhir diperbarui: <strong>{new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}