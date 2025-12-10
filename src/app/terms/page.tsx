'use client';

import { useState, useEffect } from 'react';
import { Menu, X, FileText, AlertTriangle, Shield, Users, Gavel, Scale, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Terms() {
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
            <Gavel className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Syarat & Ketentuan
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Aturan Penggunaan Website dan Layanan Kami
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
                Selamat datang di website PT AWEFENDI GEOSTRUK INDONESIA. Syarat & Ketentuan ini mengatur penggunaan website www.awefendigeostruk.com dan layanan yang kami sediakan. Dengan mengakses atau menggunakan website kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, Anda tidak boleh mengakses atau menggunakan website kami.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Penerimaan Syarat</h2>
              
              <Card className="p-8 bg-blue-50 border-l-4 border-blue-900">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-blue-900 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Dengan mengakses, browsing, atau menggunakan website ini, Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat oleh Syarat & Ketentuan ini serta Kebijakan Privasi kami. Penggunaan website ini juga tunduk pada semua hukum dan peraturan yang berlaku di Indonesia.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Website Use */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Penggunaan Website</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Yang Diperbolehkan</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Mengakses informasi tentang layanan kami</li>
                        <li>• Menghubungi kami untuk konsultasi</li>
                        <li>• Melihat portfolio dan proyek kami</li>
                        <li>• Mengunduh materi yang tersedia</li>
                        <li>• Berbagi konten dengan kredit yang tepat</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Yang Dilarang</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Menggunakan website untuk aktivitas ilegal</li>
                        <li>• Mencoba merusak atau mengganggu sistem</li>
                        <li>• Menyalin konten tanpa izin</li>
                        <li>• Mengirim spam atau malware</li>
                        <li>• Meniru identitas perusahaan atau individu</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Hak Kekayaan Intelektual</h2>
              
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Semua konten di website ini, termasuk namun tidak terbatas pada teks, gambar, desain, logo, dan materi lainnya, dilindungi oleh hak cipta dan hukum kekayaan intelektual lainnya.
                    </p>
                    
                    <div className="bg-yellow-50 rounded-lg p-6">
                      <h4 className="font-semibold text-blue-900 mb-3">Hak Milik PT AWEFENDI GEOSTRUK INDONESIA:</h4>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Nama perusahaan dan logo</li>
                        <li>• Desain arsitektur dan gambar teknis</li>
                        <li>• Foto proyek dan dokumentasi</li>
                        <li>• Konten website dan materi pemasaran</li>
                        <li>• Dokumen kontrak dan perjanjian</li>
                      </ul>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mt-6">
                      Anda tidak diperbolehkan menggunakan, menyalin, mereproduksi, atau mendistribusikan konten dari website ini tanpa izin tertulis dari PT AWEFENDI GEOSTRUK INDONESIA.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* User Obligations */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Kewajiban Pengguna</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Informasi Akurat",
                    description: "Anda setuju untuk memberikan informasi yang akurat, lengkap, dan terkini saat menghubungi kami atau menggunakan layanan kami."
                  },
                  {
                    title: "Penggunaan yang Bertanggung Jawab",
                    description: "Anda bertanggung jawab atas semua aktivitas yang terjadi di bawah akun atau identitas Anda."
                  },
                  {
                    title: "Kepatuhan Hukum",
                    description: "Anda setuju untuk mematuhi semua hukum dan peraturan yang berlaku saat menggunakan website dan layanan kami."
                  },
                  {
                    title: "Tidak Melanggar Hak",
                    description: "Anda tidak akan melanggar hak kekayaan intelektual atau hak lainnya dari pihak ketiga."
                  }
                ].map((obligation, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-400 font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">{obligation.title}</h4>
                        <p className="text-gray-600">{obligation.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Service Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Syarat Layanan</h2>
              
              <Card className="p-8">
                <h4 className="font-semibold text-blue-900 mb-4">Layanan Konsultasi Arsitektur:</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">1. Konsultasi Awal</h5>
                    <p className="text-gray-600">Kami menyediakan konsultasi awal gratis untuk membahas kebutuhan proyek Anda. Informasi yang diberikan bersifat umum dan tidak mengikat secara hukum.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">2. Perjanjian Kerja Sama</h5>
                    <p className="text-gray-600">Setiap proyek akan diatur oleh perjanjian kerja sama tertulis yang mencakup lingkup pekerjaan, jadwal, biaya, dan syarat-syarat lainnya.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">3. Pembayaran</h5>
                    <p className="text-gray-600">Pembayaran dilakukan sesuai dengan termin yang disepakati dalam perjanjian. Keterlambatan pembayaran dapat dikenakan denda sesuai perjanjian.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">4. Hak Kekayaan Intelektual Desain</h5>
                    <p className="text-gray-600">Desain arsitektur yang kami buat tetap menjadi milik intelektual kami hingga pembayaran penuh dilakukan. Setelah itu, hak dapat dialihkan sesuai perjanjian.</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Pembatasan Tanggung Jawab</h2>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-3">Batasan Tanggung Jawab:</h4>
                    <ul className="text-red-800 space-y-2">
                      <li>• Website ini disediakan "sebagaimana adanya" tanpa jaminan apa pun.</li>
                      <li>• Kami tidak bertanggung jawab atas kerugian langsung atau tidak langsung yang timbul dari penggunaan website.</li>
                      <li>• Kami tidak menjamin bahwa website akan selalu tersedia atau bebas dari kesalahan.</li>
                      <li>• Informasi di website dapat berubah sewaktu-waktu tanpa pemberitahuan.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy and Data Protection */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Privasi dan Perlindungan Data</h2>
              
              <Card className="p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Privasi Anda sangat penting bagi kami. Penggunaan website kami tunduk pada Kebijakan Privasi kami yang menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan menggunakan website ini, Anda setuju dengan pengumpulan dan penggunaan data sesuai dengan Kebijakan Privasi kami.
                </p>
              </Card>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Penghentian Penggunaan</h2>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Kami berhak untuk menghentikan atau menangguhkan akses Anda ke website kami, baik sementara maupun permanen, tanpa pemberitahuan sebelumnya, jika:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Anda melanggar syarat dan ketentuan ini",
                  "Anda menggunakan website untuk tujuan ilegal",
                  "Anda mencoba merusak atau mengganggu sistem",
                  "Anda terlibat dalam aktivitas penipuan",
                  "Kami diwajibkan oleh hukum untuk melakukannya",
                  "Alasan lain yang kami anggap perlu"
                ].map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Penyelesaian Sengketa</h2>
              
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <Scale className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Setiap sengketa yang timbul dari atau terkait dengan penggunaan website ini atau syarat dan ketentuan ini akan diselesaikan melalui:
                    </p>
                    
                    <ol className="text-gray-700 space-y-3 ml-4">
                      <li><strong>1. Negosiasi:</strong> Para pihak akan terlebih dahulu mencoba menyelesaikan sengketa melalui negosiasi baik.</li>
                      <li><strong>2. Mediasi:</strong> Jika negosiasi gagal, sengketa akan diselesaikan melalui mediasi dengan mediator netral.</li>
                      <li><strong>3. Yurisdiksi:</strong> Jika mediasi gagal, sengketa akan diselesaikan melalui pengadilan di wilayah hukum Balikpapan, Kalimantan Timur.</li>
                    </ol>
                  </div>
                </div>
              </Card>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Hukum yang Berlaku</h2>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <p className="text-gray-700 leading-relaxed">
                  Syarat & Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap perselisihan yang timbul dari atau terkait dengan syarat dan ketentuan ini akan tunduk pada yurisdiksi eksklusif pengadilan di Balikpapan, Kalimantan Timur.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Perubahan Syarat & Ketentuan</h2>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Kami berhak untuk mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan berlaku efektif segera setelah dipublikasikan di website ini. Penggunaan website Anda setelah perubahan menunjukkan penerimaan Anda terhadap syarat dan ketentuan yang diperbarui.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-blue-800">
                  <strong>Rekomendasi:</strong> Kami menyarankan Anda untuk secara berkala meninjau halaman ini untuk mengetahui perubahan terbaru.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Hubungi Kami</h2>
              
              <Card className="p-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                <p className="text-blue-100 leading-relaxed mb-6">
                  Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami:
                </p>
                
                <div className="space-y-3">
                  <p><strong>Email:</strong> legal@awefendigeostruk.com</p>
                  <p><strong>Telepon:</strong> 0878-5104-4791</p>
                  <p><strong>Alamat:</strong> Jalan Soekarno Hatta KM.8 Perumahan Graha Poltekba Blok C No.9, Batu Ampar, Balikpapan, Kalimantan Timur 76136</p>
                </div>
                
                <div className="mt-6">
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                    Hubungi Tim Legal
                  </Button>
                </div>
              </Card>
            </div>

            {/* Last Updated */}
            <div className="text-center py-8 border-t">
              <p className="text-gray-500">
                Syarat & Ketentuan ini berlaku efektif sejak: <strong>1 Januari 2024</strong>
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