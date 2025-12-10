'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Send, Clock, MessageSquare, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Contact() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = {
    address: "Jalan Soekarno Hatta KM.8 Perumahan Graha Poltekba Blok C No.9, Desa/Kelurahan Batu Ampar, Kec. Balik Papan, Kota Balik Papan, Provinsi Kalimantan Timur, Kode Pos 76136",
    phone: "0878-5104-4791",
    email: "info@awefendigeostruk.com",
    workingHours: "Senin - Jumat: 08:00 - 17:00 WITA\nSabtu: 08:00 - 12:00 WITA\nMinggu: Tutup"
  };

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
                <a href="/contact" className="text-blue-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Contact Us</a>
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
              <a href="/contact" className="text-blue-900 hover:text-yellow-600 block px-3 py-2 text-base font-medium">Contact Us</a>
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
            Hubungi Kami
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Mari Diskusikan Proyek Arsitektur Anda
          </p>
          <p className="text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Kami siap membantu mewujudkan visi arsitektur Anda. Hubungi kami untuk konsultasi gratis dan temukan solusi terbaik untuk kebutuhan bangunan Anda.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Kirim Pesan</h2>
              <p className="text-gray-600 mb-8">
                Isi formulir di bawah ini dan tim kami akan menghubungi Anda segera untuk diskusi lebih lanjut tentang proyek Anda.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="0812-3456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="PT. Example"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Proyek
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Pilih jenis proyek</option>
                    <option value="residential">Residential (Rumah Tinggal)</option>
                    <option value="commercial">Commercial (Kantor/Ruko)</option>
                    <option value="hospitality">Hospitality (Hotel/Restoran)</option>
                    <option value="public">Public Facility (Fasilitas Umum)</option>
                    <option value="industrial">Industrial (Pabrik/Gudang)</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Jelaskan kebutuhan proyek Anda secara detail..."
                  ></textarea>
                </div>

                {submitMessage && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">{submitMessage}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-4 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Mengirim...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Informasi Kontak</h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">Alamat Kantor</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">Telepon</h3>
                      <p className="text-gray-600">
                        <a href={`tel:${contactInfo.phone}`} className="hover:text-yellow-600 transition-colors">
                          {contactInfo.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">Email</h3>
                      <p className="text-gray-600">
                        <a href={`mailto:${contactInfo.email}`} className="hover:text-yellow-600 transition-colors">
                          {contactInfo.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">Jam Operasional</h3>
                      <p className="text-gray-600 whitespace-pre-line">
                        {contactInfo.workingHours}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-4">Butuh Bantuan Cepat?</h3>
                <p className="text-blue-100 mb-6">
                  Tim profesional kami siap membantu Anda 24/7 untuk konsultasi darurat dan informasi proyek.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Live Chat
                    </span>
                  </Button>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Lokasi Kami</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kunjungi kantor kami untuk konsultasi langsung dengan tim arsitek profesional
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Navigation className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Google Maps</h3>
                <p className="text-gray-600 mb-4">
                  Jalan Soekarno Hatta KM.8 Perumahan Graha Poltekba Blok C No.9<br />
                  Batu Ampar, Balikpapan, Kalimantan Timur
                </p>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                  <span className="flex items-center gap-2">
                    <Navigation className="w-4 h-4" />
                    Buka di Google Maps
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Pertanyaan Umum</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Berapa lama waktu pengerjaan proyek?",
                answer: "Waktu pengerjaan tergantung pada skala dan kompleksitas proyek. Untuk rumah tinggal biasanya 6-12 bulan, untuk proyek komersial bisa 12-24 bulan."
              },
              {
                question: "Apakah menyediakan garansi untuk pekerjaan?",
                answer: "Ya, kami memberikan garansi struktural selama 1 tahun dan garansi kebocoran selama 5 tahun untuk semua proyek yang kami kerjakan."
              },
              {
                question: "Bagaimana sistem pembayaran yang berlaku?",
                answer: "Kami menggunakan sistem termin pembayaran sesuai progres pekerjaan: DP 30%, tahap 1 30%, tahap 2 30%, dan penyelesaian 10%."
              },
              {
                question: "Apakah bisa membantu dengan perizinan?",
                answer: "Ya, kami menyediakan layanan konsultasi dan pengurusan perizinan bangunan (IMB) sebagai bagian dari layanan terintegrasi kami."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}