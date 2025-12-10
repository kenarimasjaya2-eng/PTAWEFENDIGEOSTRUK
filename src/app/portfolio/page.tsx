'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Search, Filter, Calendar, MapPin as LocationIcon, Square, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Villa Modern Tropis",
      category: "residential",
      location: "Balikpapan, Kalimantan Timur",
      year: "2023",
      area: "450 m²",
      description: "Villa pribadi dengan konsep tropis modern yang menggabungkan estetika kontemporer dengan elemen alami. Desain ini memaksimalkan pencahayaan alami dan sirkulasi udara untuk kenyamanan optimal.",
      features: ["3 kamar tidur", "Ruang keluarga terbuka", "Kolam renang pribadi", "Taman tropis"],
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e3f2fd'/%3E%3Crect x='50' y='100' width='300' height='150' fill='%231976d2'/%3E%3Cpolygon points='50,100 200,50 350,100' fill='%23d32f2f'/%3E%3Crect x='100' y='150' width='60' height='100' fill='%23fff3e0'/%3E%3Crect x='240' y='150' width='60' height='100' fill='%23fff3e0'/%3E%3Crect x='170' y='180' width='60' height='70' fill='%23fff3e0'/%3E%3Ctext x='200' y='280' text-anchor='middle' fill='%231976d2' font-family='Arial' font-size='14' font-weight='bold'%3EVilla Modern Tropis%3C/text%3E%3C/svg%3E"
    },
    {
      id: 2,
      title: "Kantor PT. Maju Bersama",
      category: "commercial",
      location: "Samarinda, Kalimantan Timur",
      year: "2023",
      area: "1,200 m²",
      description: "Gedung kantor 3 lantai dengan desain yang mencerminkan profesionalisme dan keterbukaan. Menggunakan material sustainable dan teknologi hijau untuk efisiensi energi.",
      features: ["3 lantai", "Ruang meeting modern", "Co-working space", "Rooftop garden"],
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8f5e8'/%3E%3Crect x='100' y='80' width='200' height='180' fill='%234caf50'/%3E%3Crect x='120' y='100' width='40' height='30' fill='%23fff3e0'/%3E%3Crect x='180' y='100' width='40' height='30' fill='%23fff3e0'/%3E%3Crect x='240' y='100' width='40' height='30' fill='%23fff3e0'/%3E%3Crect x='120' y='150' width='40' height='30' fill='%23fff3e0'/%3E%3Crect x='180' y='150' width='40' height='30' fill='%23fff3e0'/%3E%3Crect x='240' y='150' width='40' height='30' fill='%23fff3e0'/%3E%3Crect x='120' y='200' width='40' height='30' fill='%23fff3e0'/%3E%3Crect x='180' y='200' width='40' height='30' fill='%23fff3e0'/%3E%3Crect x='240' y='200' width='40' height='30' fill='%23fff3e0'/%3E%3Ctext x='200' y='280' text-anchor='middle' fill='%234caf50' font-family='Arial' font-size='14' font-weight='bold'%3EKantor PT. Maju Bersama%3C/text%3E%3C/svg%3E"
    },
    {
      id: 3,
      title: "Rumah Tinggal Minimalis",
      category: "residential",
      location: "Balikpapan, Kalimantan Timur",
      year: "2022",
      area: "150 m²",
      description: "Desain rumah tinggal dengan gaya minimalis yang fokus pada fungsi dan efisiensi ruang. Sederhana namun elegan dengan material berkualitas tinggi.",
      features: ["2 kamar tidur", "Ruang tamu luas", "Dapur modern", "Halaman depan"],
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3e5f5'/%3E%3Crect x='100' y='120' width='200' height='120' fill='%237b1fa2'/%3E%3Cpolygon points='100,120 200,80 300,120' fill='%23c2185b'/%3E%3Crect x='140' y='160' width='50' height='80' fill='%23fff3e0'/%3E%3Crect x='210' y='160' width='50' height='80' fill='%23fff3e0'/%3E%3Crect x='175' y='140' width='50' height='40' fill='%23fff3e0'/%3E%3Ctext x='200' y='280' text-anchor='middle' fill='%237b1fa2' font-family='Arial' font-size='14' font-weight='bold'%3ERumah Minimalis%3C/text%3E%3C/svg%3E"
    },
    {
      id: 4,
      title: "Hotel Bintang 4",
      category: "hospitality",
      location: "Bontang, Kalimantan Timur",
      year: "2023",
      area: "3,500 m²",
      description: "Hotel modern dengan 80 kamar yang menggabungkan kemewahan dan kehangatan khas Indonesia. Dilengkapi dengan fasilitas lengkap untuk kenyamanan tamu.",
      features: ["80 kamar", "Restoran dan cafe", "Ruang konferensi", "Kolam renang dan spa"],
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e0f2f1'/%3E%3Crect x='80' y='60' width='240' height='200' fill='%2300796b'/%3E%3Crect x='100' y='80' width='30' height='20' fill='%23fff3e0'/%3E%3Crect x='150' y='80' width='30' height='20' fill='%23fff3e0'/%3E%3Crect x='200' y='80' width='30' height='20' fill='%23fff3e0'/%3E%3Crect x='250' y='80' width='30' height='20' fill='%23fff3e0'/%3E%3Crect x='100' y='120' width='30' height='20' fill='%23fff3e0'/%3E%3Crect x='150' y='120' width='30' height='20' fill='%23fff3e0'/%3E%3Crect x='200' y='120' width='30' height='20' fill='%23fff3e0'/%3E%3Crect x='250' y='120' width='30' height='20' fill='%23fff3e0'/%3E%3Crect x='100' y='160' width='30' height='20' fill='%23fff3e0'/%3E%3Crect x='150' y='160' width='30' height='20' fill='%23fff3e0'/%3E%3Crect x='200' y='160' width='30' height='20' fill='%23fff3e0'/%3E%3Crect x='250' y='160' width='30' height='20' fill='%23fff3e0'/%3E%3Ctext x='200' y='280' text-anchor='middle' fill='%2300796b' font-family='Arial' font-size='14' font-weight='bold'%3EHotel Bintang 4%3C/text%3E%3C/svg%3E"
    },
    {
      id: 5,
      title: "Pusat Perbelanjaan",
      category: "commercial",
      location: "Balikpapan, Kalimantan Timur",
      year: "2022",
      area: "5,000 m²",
      description: "Pusat perbelanjaan modern dengan konsep mixed-use yang menggabungkan retail, entertainment, dan kuliner dalam satu lokasi strategis.",
      features: ["100+ tenant", "Food court", "Cinema XXI", "Area parkir luas"],
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23fce4ec'/%3E%3Crect x='50' y='100' width='300' height='150' fill='%23e91e63'/%3E%3Crect x='70' y='120' width='60' height='40' fill='%23fff3e0'/%3E%3Crect x='150' y='120' width='60' height='40' fill='%23fff3e0'/%3E%3Crect x='230' y='120' width='60' height='40' fill='%23fff3e0'/%3E%3Crect x='70' y='180' width='60' height='40' fill='%23fff3e0'/%3E%3Crect x='150' y='180' width='60' height='40' fill='%23fff3e0'/%3E%3Crect x='230' y='180' width='60' height='40' fill='%23fff3e0'/%3E%3Ctext x='200' y='280' text-anchor='middle' fill='%23e91e63' font-family='Arial' font-size='14' font-weight='bold'%3EPusat Perbelanjaan%3C/text%3E%3C/svg%3E"
    },
    {
      id: 6,
      title: "Klinik Kesehatan",
      category: "public",
      location: "Samarinda, Kalimantan Timur",
      year: "2023",
      area: "800 m²",
      description: "Fasilitas kesehatan modern dengan desain yang menenangkan dan nyaman. Dirancang untuk memberikan pelayanan medis yang optimal dengan fokus pada kenyamanan pasien.",
      features: ["20 ruang periksa", "Laboratorium", "Apotek", "Ruang tunggu nyaman"],
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8eaf6'/%3E%3Crect x='80' y='90' width='240' height='150' fill='%233f51b5'/%3E%3Crect x='100' y='110' width='40' height='30' fill='%23fff3e0'/%3E%3Crect x='160' y='110' width='40' height='30' fill='%23fff3e0'/%3E%3Crect x='220' y='110' width='40' height='30' fill='%23fff3e0'/%3E%3Crect x='100' y='160' width='40' height='30' fill='%23fff3e0'/%3E%3Crect x='160' y='160' width='40' height='30' fill='%23fff3e0'/%3E%3Crect x='220' y='160' width='40' height='30' fill='%23fff3e0'/%3E%3Crect x='280' y='160' width='20' height='60' fill='%23fff3e0'/%3E%3Ctext x='200' y='280' text-anchor='middle' fill='%233f51b5' font-family='Arial' font-size='14' font-weight='bold'%3EKlinik Kesehatan%3C/text%3E%3C/svg%3E"
    }
  ];

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'hospitality', name: 'Hospitality' },
    { id: 'public', name: 'Public Facility' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                <a href="/portfolio" className="text-blue-900 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Portfolio</a>
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
              <a href="/portfolio" className="text-blue-900 hover:text-yellow-600 block px-3 py-2 text-base font-medium">Portfolio</a>
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
            Portfolio Kami
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Karya-karya terbaik yang telah kami wujudkan untuk berbagai klien
          </p>
          <p className="text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Kami bangga telah berkontribusi dalam berbagai proyek arsitektur di seluruh Indonesia. Setiap proyek mencerminkan komitmen kami terhadap kualitas, inovasi, dan kepuasan klien.
          </p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? "bg-yellow-600 hover:bg-yellow-700 text-white border-yellow-600"
                      : "border-gray-300 text-gray-700 hover:text-yellow-600 hover:border-yellow-600"
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari proyek..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">Tidak ada proyek yang ditemukan.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {project.year}
                          </span>
                          <span className="flex items-center gap-1">
                            <Square className="w-4 h-4" />
                            {project.area}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-yellow-600 mb-2">
                      <LocationIcon className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{project.features.length - 3} lagi
                        </span>
                      )}
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-yellow-600 group-hover:text-white group-hover:border-yellow-600 transition-colors duration-300">
                      <span className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        Lihat Detail
                      </span>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">100+</div>
              <div className="text-gray-600">Proyek Selesai</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">Klien Puas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">10+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">Penghargaan</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tertarik dengan Proyek Kami?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Mari diskusikan kebutuhan arsitektur Anda dan wujudkan proyek impian Anda bersama kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg px-8 py-4">
              Mulai Konsultasi
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}