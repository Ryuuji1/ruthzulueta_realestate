const { useState } = React;

// Define the App component
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    alert('Thank you for your interest! We will contact you soon.');
  };

  const properties = [
    {
      id: 1,
      image: 'https://placehold.co/400x300/FF0066/ffffff?text=Modern+Townhouse',
      price: '$895,000',
      address: '123 Harbor View, Miami',
      beds: 3,
      baths: 2,
      sqft: 2200,
      type: 'Modern Townhouse'
    },
    {
      id: 2,
      image: 'https://placehold.co/400x300/6A0066/ffffff?text=Luxury+Apartment',
      price: '$1,450,000',
      address: '456 Downtown Ave, New York',
      beds: 2,
      baths: 2,
      sqft: 1500,
      type: 'Luxury Apartment'
    },
    {
      id: 3,
      image: 'https://placehold.co/400x300/934790/ffffff?text=Family+Home',
      price: '$750,000',
      address: '789 Garden Street, Austin',
      beds: 4,
      baths: 3,
      sqft: 2800,
      type: 'Family Home'
    },
    {
      id: 4,
      image: 'https://placehold.co/400x300/E8D4B7/6A0066?text=Waterfront+Property',
      price: '$2,200,000',
      address: '321 Ocean Blvd, Miami',
      beds: 5,
      baths: 4,
      sqft: 3500,
      type: 'Waterfront Property'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Johnson',
      text: 'Ruth helped us find our dream home in just 2 weeks. Her expertise and dedication are unmatched.',
      rating: 5
    },
    {
      name: 'Jennifer Chen',
      text: 'The investment properties Ruth recommended have increased in value by 40%. She truly understands the market.',
      rating: 5
    },
    {
      name: 'Robert Garcia',
      text: 'Professional, responsive, and incredibly knowledgeable. I recommend Ruth to all my friends.',
      rating: 5
    }
  ];

  return (
    React.createElement('div', { className: 'min-h-screen' },
      // Header
      React.createElement('header', { className: 'bg-white shadow-sm sticky top-0 z-50' },
        React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
          React.createElement('div', { className: 'flex justify-between items-center py-4' },
            React.createElement('div', { className: 'flex items-center space-x-3' },
              // Logo placeholder - would be replaced with actual logo
              React.createElement('div', { className: 'logo-container bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16' }),
              React.createElement('span', { className: 'text-xl md:text-2xl font-bold text-primary-purple' }, 'Ruth Zulueta & Associates')
            ),
            React.createElement('nav', { className: 'hidden md:flex space-x-8' },
              React.createElement('a', { href: '#about', className: 'text-gray-700 hover:text-primary-pink transition-colors' }, 'About'),
              React.createElement('a', { href: '#portfolio', className: 'text-gray-700 hover:text-primary-pink transition-colors' }, 'Portfolio'),
              React.createElement('a', { href: '#services', className: 'text-gray-700 hover:text-primary-pink transition-colors' }, 'Services'),
              React.createElement('a', { href: '#contact', className: 'text-gray-700 hover:text-primary-pink transition-colors' }, 'Contact')
            ),
            React.createElement('button', { className: 'md:hidden text-primary-pink' },
              React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-6 w-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M4 6h16M4 12h16M4 18h16' })
              )
            )
          )
        )
      ),

      // Hero Section
      React.createElement('section', { className: 'primary-gradient text-white' },
        React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24' },
          React.createElement('div', { className: 'hero-content flex flex-col md:flex-row gap-12 items-center' },
            React.createElement('div', { className: 'md:w-1/2' },
              React.createElement('h1', { className: 'text-3xl md:text-4xl lg:text-5xl font-bold mb-6' },
                'Find Your Dream',
                React.createElement('span', { className: 'block' }, 'Perfect Home')
              ),
              React.createElement('p', { className: 'text-lg md:text-xl mb-8 text-white' },
                'Your real estate adventure starts here! Reach out to me and expect my personalized response within 24 hours – let\'s make it happen!'
              ),
              React.createElement('div', { className: 'hero-buttons flex flex-col sm:flex-row gap-4' },
                React.createElement('a', {
                  href: 'https://calendar.google.com/calendar/u/0/appointments/AcZssY234',
                  target: '_blank',
                  className: 'bg-white text-primary-pink px-6 py-3 rounded-lg font-semibold transition-colors text-center btn-book-call'
                }, 'Book a Call'),
                React.createElement('button', {
                  onClick: openModal,
                  className: 'border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-pink transition-colors text-center'
                }, 'Message')
              )
            ),
            React.createElement('div', { className: 'md:w-1/2 relative' },
              React.createElement('img', {
                src: 'https://placehold.co/600x500/E8D4B7/6A0066?text=Ruth+Zulueta',
                alt: 'Ruth Zulueta - Real Estate Broker',
                className: 'rounded-lg shadow-2xl w-full'
              }),
              React.createElement('div', { className: 'absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg' },
                React.createElement('div', { className: 'flex items-center space-x-2 mb-1' },
                  React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-4 w-4 text-primary-pink', viewBox: '0 0 20 20', fill: 'currentColor' },
                    React.createElement('path', { fillRule: 'evenodd', d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z', clipRule: 'evenodd' })
                  ),
                  React.createElement('span', { className: 'font-semibold text-sm' }, 'Top Broker 2024')
                ),
                React.createElement('p', { className: 'text-xs text-gray-600' }, '200+ Happy Clients')
              )
            )
          )
        )
      ),

      // About Section
      React.createElement('section', { id: 'about', className: 'py-12 bg-white' },
        React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
          React.createElement('div', { className: 'text-center mb-12' },
            React.createElement('h2', { className: 'text-2xl md:text-3xl font-bold text-gray-900 mb-4' }, 'Meet Your Real Estate Expert'),
            React.createElement('p', { className: 'text-lg text-gray-600 max-w-3xl mx-auto' },
              'With over 15 years of experience in the luxury real estate market, Ruth brings unparalleled expertise to every client.'
            )
          ),
          React.createElement('div', { className: 'flex flex-col lg:flex-row gap-12 items-center' },
            React.createElement('div', { className: 'lg:w-1/2' },
              React.createElement('img', {
                src: 'https://placehold.co/500x600/E8D4B7/6A0066?text=Ruth+Professional',
                alt: 'Ruth Zulueta Professional',
                className: 'rounded-lg shadow-lg w-full'
              })
            ),
            React.createElement('div', { className: 'lg:w-1/2' },
              React.createElement('h3', { className: 'text-2xl font-bold text-gray-900 mb-4' }, 'Ruth Zulueta'),
              React.createElement('p', { className: 'text-gray-600 mb-6' },
                'As a licensed real estate broker with extensive knowledge of local markets, I specialize in helping clients buy, sell, and invest in premium properties. My commitment to excellence and personalized service has earned me recognition as one of the top brokers in the region.'
              ),
              React.createElement('div', { className: 'stats-container grid grid-cols-2 gap-4 mb-6' },
                React.createElement('div', { className: 'text-center p-3 bg-pink-50 rounded-lg' },
                  React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-6 w-6 text-primary-pink mx-auto mb-1', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                    React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' })
                  ),
                  React.createElement('div', { className: 'text-xl font-bold text-primary-pink' }, '200+'),
                  React.createElement('div', { className: 'text-gray-600 text-sm' }, 'Properties Sold')
                ),
                React.createElement('div', { className: 'text-center p-3 bg-purple-50 rounded-lg' },
                  React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-6 w-6 text-primary-purple mx-auto mb-1', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                    React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' })
                  ),
                  React.createElement('div', { className: 'text-xl font-bold text-primary-purple' }, '15+'),
                  React.createElement('div', { className: 'text-gray-600 text-sm' }, 'Years Experience')
                )
              ),
              React.createElement('div', { className: 'space-y-3' },
                React.createElement('div', { className: 'flex items-center space-x-3' },
                  React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5 text-primary-pink', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                    React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' })
                  ),
                  React.createElement('span', { className: 'text-gray-700' }, 'Personalized property matching')
                ),
                React.createElement('div', { className: 'flex items-center space-x-3' },
                  React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5 text-primary-pink', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                    React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }),
                    React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' })
                  ),
                  React.createElement('span', { className: 'text-gray-700' }, 'Expert market analysis')
                ),
                React.createElement('div', { className: 'flex items-center space-x-3' },
                  React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5 text-primary-pink', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                    React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' })
                  ),
                  React.createElement('span', { className: 'text-gray-700' }, '24/7 client support')
                )
              )
            )
          )
        )
      ),

      // Portfolio Section
      React.createElement('section', { id: 'portfolio', className: 'py-12 bg-beige' },
        React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
          React.createElement('div', { className: 'text-center mb-12' },
            React.createElement('h2', { className: 'text-2xl md:text-3xl font-bold text-gray-900 mb-4' }, 'Featured Properties'),
            React.createElement('p', { className: 'text-lg text-gray-600 max-w-3xl mx-auto' },
              'Explore our curated selection of premium properties that showcase the quality and expertise we bring to every transaction.'
            )
          ),
          React.createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' },
            properties.map((property) => 
              React.createElement('div', { key: property.id, className: 'feature-card bg-white rounded-lg shadow-lg overflow-hidden' },
                React.createElement('img', {
                  src: property.image,
                  alt: property.type,
                  className: 'w-full h-40 object-cover'
                }),
                React.createElement('div', { className: 'p-4' },
                  React.createElement('div', { className: 'text-xl font-bold text-primary-pink mb-1' }, property.price),
                  React.createElement('h3', { className: 'text-md font-semibold text-gray-900 mb-1' }, property.type),
                  React.createElement('p', { className: 'text-gray-600 mb-3 text-sm flex items-start' },
                    React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-3 w-3 text-gray-400 mt-0.5 mr-1 flex-shrink-0', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                      React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }),
                      React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' })
                    ),
                    property.address
                  ),
                  React.createElement('div', { className: 'flex justify-between text-xs text-gray-500' },
                    React.createElement('span', null, property.beds, ' beds'),
                    React.createElement('span', null, property.baths, ' baths'),
                    React.createElement('span', null, property.sqft, ' sqft')
                  )
                )
              )
            )
          )
        )
      ),

      // Testimonials Section
      React.createElement('section', { className: 'py-12 secondary-gradient text-white' },
        React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
          React.createElement('div', { className: 'text-center mb-12' },
            React.createElement('h2', { className: 'text-2xl md:text-3xl font-bold mb-4' }, 'What Our Clients Say'),
            React.createElement('p', { className: 'text-lg text-white max-w-3xl mx-auto' },
              'Don\'t just take our word for it. Here\'s what our satisfied clients have to say about working with us.'
            )
          ),
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
            testimonials.map((testimonial, index) => 
              React.createElement('div', { key: index, className: 'bg-white bg-opacity-10 rounded-lg p-5 backdrop-blur-sm' },
                React.createElement('div', { className: 'flex mb-3' },
                  Array.from({ length: testimonial.rating }).map((_, i) => 
                    React.createElement('svg', { key: i, xmlns: 'http://www.w3.org/2000/svg', className: 'h-4 w-4 text-yellow-400', viewBox: '0 0 20 20', fill: 'currentColor' },
                      React.createElement('path', { d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' })
                    )
                  )
                ),
                React.createElement('p', { className: 'text-white mb-3 text-sm' }, '"', testimonial.text, '"'),
                React.createElement('div', { className: 'font-semibold text-sm' }, testimonial.name)
              )
            )
          )
        )
      ),

      // Services & Contact Section
      React.createElement('section', { id: 'contact', className: 'py-12 bg-white' },
        React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
          React.createElement('div', { className: 'contact-section grid grid-cols-1 lg:grid-cols-2 gap-12' },
            // Services
            React.createElement('div', null,
              React.createElement('h2', { className: 'text-2xl md:text-3xl font-bold text-gray-900 mb-6' }, 'My Services'),
              React.createElement('div', { className: 'space-y-6' },
                React.createElement('div', { className: 'flex items-start space-x-4' },
                  React.createElement('div', { className: 'bg-pink-100 p-2 rounded-lg' },
                    React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5 text-primary-pink', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                      React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' })
                    )
                  ),
                  React.createElement('div', null,
                    React.createElement('h3', { className: 'text-lg font-semibold text-gray-900 mb-1' }, 'Property Buying'),
                    React.createElement('p', { className: 'text-gray-600 text-sm' },
                      'Expert guidance through the entire buying process, from finding the perfect property to closing the deal.'
                    )
                  )
                ),
                React.createElement('div', { className: 'flex items-start space-x-4' },
                  React.createElement('div', { className: 'bg-purple-100 p-2 rounded-lg' },
                    React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5 text-primary-purple', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                      React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' })
                    )
                  ),
                  React.createElement('div', null,
                    React.createElement('h3', { className: 'text-lg font-semibold text-gray-900 mb-1' }, 'Property Selling'),
                    React.createElement('p', { className: 'text-gray-600 text-sm' },
                      'Maximize your property\'s value with our comprehensive marketing strategy and professional staging.'
                    )
                  )
                ),
                React.createElement('div', { className: 'flex items-start space-x-4' },
                  React.createElement('div', { className: 'bg-lavender p-2 rounded-lg' },
                    React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5 text-lavender', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                      React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })
                    )
                  ),
                  React.createElement('div', null,
                    React.createElement('h3', { className: 'text-lg font-semibold text-gray-900 mb-1' }, 'Investment Consulting'),
                    React.createElement('p', { className: 'text-gray-600 text-sm' },
                      'Strategic investment advice to help you build wealth through smart real estate decisions.'
                    )
                  )
                )
              )
            ),

            // Contact Form
            React.createElement('div', { className: 'bg-beige rounded-2xl p-6' },
              React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 mb-2' }, 'Get In Touch'),
              React.createElement('p', { className: 'text-gray-600 mb-4' },
                'Ready to start your real estate journey? We encourage you to book a call with us for a more personalized experience.'
              ),
              React.createElement('p', { className: 'text-gray-600 mb-6' },
                'If you prefer to communicate via email, please send an email to ruth@ruthzulueta.com and we\'ll get back to you within 24 hours.'
              ),

              React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4 mb-6' },
                React.createElement('a', {
                  href: 'https://calendar.google.com/calendar/u/0/appointments/AcZssY234',
                  target: '_blank',
                  className: 'bg-primary-pink text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center flex-1 text-center btn-book-call'
                }, 'Book a Call'),
                React.createElement('button', {
                  onClick: openModal,
                  className: 'border-2 border-primary-pink text-primary-pink py-3 px-6 rounded-lg font-semibold hover:bg-primary-pink hover:text-white transition-colors text-center flex-1'
                }, 'Message')
              ),

              React.createElement('div', { className: 'mt-6 pt-6 border-t border-gray-200' },
                React.createElement('h3', { className: 'text-lg font-semibold text-gray-900 mb-4' }, 'Follow Us'),
                React.createElement('div', { className: 'flex space-x-4' },
                  React.createElement('a', { href: 'https://facebook.com/ruthzulueta', target: '_blank', className: 'text-primary-pink hover:text-pink-700' },
                    React.createElement('svg', { className: 'h-6 w-6', fill: 'currentColor', viewBox: '0 0 24 24' },
                      React.createElement('path', { d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.893h-2.33v6.988C18.343 21.128 22 16.991 22 12z' })
                    )
                  ),
                  React.createElement('a', { href: 'https://instagram.com/ruthzulueta', target: '_blank', className: 'text-primary-pink hover:text-pink-700' },
                    React.createElement('svg', { className: 'h-6 w-6', fill: 'currentColor', viewBox: '0 0 24 24' },
                      React.createElement('path', { d: 'M12.017 0C5.394 0 .017 5.377.017 12 .017 18.623 5.394 24 12.017 24 18.64 24 24.017 18.623 24.017 12 24.017 5.377 18.64 0 12.017 0zM18.5 12c0 3.588-2.912 6.5-6.5 6.5s-6.5-2.912-6.5-6.5 2.912-6.5 6.5-6.5 6.5 2.912 6.5 6.5zM19 24l-7-7.5-7 7.5h14z' })
                    )
                  )
                )
              )
            )
          )
        )
      ),

      // Footer
      React.createElement('footer', { className: 'bg-primary-purple text-white py-8' },
        React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
            React.createElement('div', null,
              React.createElement('div', { className: 'flex items-center space-x-3 mb-4' },
                // Logo placeholder - would be replaced with actual logo
                React.createElement('div', { className: 'logo-container bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12' }),
                React.createElement('span', { className: 'text-xl font-bold' }, 'Ruth Zulueta & Associates')
              ),
              React.createElement('p', { className: 'text-white text-sm' },
                'Your trusted partner in real estate excellence. Helping you find and sell properties with unmatched expertise.'
              )
            ),
            React.createElement('div', null,
              React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'Quick Links'),
              React.createElement('ul', { className: 'space-y-2' },
                React.createElement('li', null, React.createElement('a', { href: '#about', className: 'hover:text-pink-300 transition-colors text-sm' }, 'About')),
                React.createElement('li', null, React.createElement('a', { href: '#portfolio', className: 'hover:text-pink-300 transition-colors text-sm' }, 'Portfolio')),
                React.createElement('li', null, React.createElement('a', { href: '#services', className: 'hover:text-pink-300 transition-colors text-sm' }, 'Services')),
                React.createElement('li', null, React.createElement('a', { href: '#contact', className: 'hover:text-pink-300 transition-colors text-sm' }, 'Contact'))
              )
            ),
            React.createElement('div', null,
              React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'Contact Info'),
              React.createElement('div', { className: 'space-y-2 text-white' },
                React.createElement('div', { className: 'flex items-center space-x-2' },
                  React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-4 w-4', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                    React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }),
                    React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' })
                  ),
                  React.createElement('span', { className: 'text-sm' }, '123 Real Estate Ave, Suite 100')
                ),
                React.createElement('div', { className: 'flex items-center space-x-2' },
                  React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-4 w-4', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
                    React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
                  ),
                  React.createElement('span', { className: 'text-sm' }, 'ruth@ruthzulueta.com')
                )
              )
            )
          ),
          React.createElement('div', { className: 'border-t border-purple-700 mt-8 pt-6 text-center text-white' },
            React.createElement('p', { className: 'text-sm' }, '© 2024 Ruth Zulueta & Associates. All rights reserved.')
          )
        )
      )
    )
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));

// Modal functions
function openModal() {
  document.getElementById('messageModal').classList.add('show');
}

function closeModal() {
  document.getElementById('messageModal').classList.remove('show');
}

// Character counter for message box
document.getElementById('messageText').addEventListener('input', function() {
  const charCount = this.value.length;
  document.getElementById('charCount').textContent = charCount;
});

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('messageModal');
  if (event.target === modal) {
    closeModal();
  }
};

// Close modal with escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Handle form submission
document.getElementById('messageForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const message = document.getElementById('messageText').value;
  if (message.trim() === '') {
    alert('Please enter a message');
    return;
  }
  alert('Thank you for your message! We will contact you soon.');
  document.getElementById('messageText').value = '';
  document.getElementById('charCount').textContent = '0';
  closeModal();
});