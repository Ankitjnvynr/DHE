import React, { useState } from 'react';

// Custom Dropdown Component
const CustomDropdown = ({ options, selected, onSelect, placeholder, isOpen, setIsOpen }) => {
  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="position-relative w-100">
      <button
        className="btn w-100 d-flex justify-content-between align-items-center"
        style={{
          padding: '12px 16px',
          border: '1px solid #ced4da',
          borderRadius: '5px',
          backgroundColor: 'white',
          color: selected && selected !== placeholder ? '#495057' : '#6c757d',
          textAlign: 'left'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected || placeholder}</span>
        <span style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
          ▼
        </span>
      </button>
      
      {isOpen && (
        <div 
          className="position-absolute w-100 bg-white border border-top-0 shadow-sm"
          style={{
            top: '100%',
            left: 0,
            right: 0,
            borderRadius: '0 0 5px 5px',
            maxHeight: '200px',
            overflowY: 'auto',
            zIndex: 1000
          }}
        >
          {options.map((option, index) => (
            <button
              key={index}
              className="btn w-100 text-start border-0 rounded-0"
              style={{
                padding: '12px 16px',
                backgroundColor: option === selected ? '#007bff' : 'white',
                color: option === selected ? 'white' : '#495057',
                transition: 'background-color 0.2s ease'
              }}
              onClick={() => handleSelect(option)}
              onMouseEnter={(e) => {
                if (option !== selected) {
                  e.target.style.backgroundColor = '#f8f9fa';
                }
              }}
              onMouseLeave={(e) => {
                if (option !== selected) {
                  e.target.style.backgroundColor = 'white';
                }
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Category Button Component
const CategoryButton = ({ children, isActive, onClick }) => (
  <button
    className={`btn mx-2 mb-2 ${isActive ? 'btn-primary' : 'btn-outline-secondary'}`}
    style={{
      padding: '10px 20px',
      borderRadius: '20px',
      transition: 'all 0.3s ease',
      backgroundColor: isActive ? '#007bff' : 'transparent',
      borderColor: isActive ? '#007bff' : '#6c757d',
      color: isActive ? 'white' : '#6c757d'
    }}
    onClick={onClick}
    onMouseEnter={(e) => {
      if (!isActive) {
        e.target.style.backgroundColor = '#f8f9fa';
        e.target.style.color = '#495057';
      }
    }}
    onMouseLeave={(e) => {
      if (!isActive) {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.color = '#6c757d';
      }
    }}
  >
    {children}
  </button>
);

// Action Button Component
const ActionButton = ({ children, href, variant = 'primary' }) => {
  const baseStyles = {
    padding: '15px 25px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    display: 'block',
    textAlign: 'center',
    border: '2px solid #e9ecef'
  };

  const primaryStyles = {
    backgroundColor: 'white',
    color: '#fd7e14',
    borderColor: '#e9ecef'
  };

  const orangeStyles = {
    backgroundColor: '#fd7e14',
    color: 'white',
    borderColor: '#fd7e14'
  };

  return (
    <a
      href={href}
      className="btn d-block"
      style={variant === 'primary' ? { ...baseStyles, ...primaryStyles } : { ...baseStyles, ...orangeStyles }}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.target.style.backgroundColor = '#fd7e14';
          e.target.style.color = 'white';
          e.target.style.borderColor = '#fd7e14';
        } else {
          e.target.style.backgroundColor = '#e55a00';
          e.target.style.borderColor = '#e55a00';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          e.target.style.backgroundColor = 'white';
          e.target.style.color = '#fd7e14';
          e.target.style.borderColor = '#e9ecef';
        } else {
          e.target.style.backgroundColor = '#fd7e14';
          e.target.style.borderColor = '#fd7e14';
        }
      }}
    >
      {children}
    </a>
  );
};

// Main Component
export const DHEPublicationsPage = () => {
  const [selectedJournal, setSelectedJournal] = useState('');
  const [selectedBook, setSelectedBook] = useState('');
  const [journalDropdownOpen, setJournalDropdownOpen] = useState(false);
  const [bookDropdownOpen, setBookDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');

  const journalOptions = [
    'Search for journals',
    'Viksit India English',
    'Viksit India Hindi',
    'Viksit Bharat English',
    'Viksit Bharat Hindi'
  ];

  const bookOptions = [
    'Search for books/proceedings',
    'Proceeding-Recent Advances in School Education',
    'Proceeding-Role of Academic-Driven Startups in Developing Economy',
    'Proceeding-Indian Education for Global Welfare'
  ];

  const categories = [
    'Physical Sciences and Engineering',
    'Life Sciences',
    'Health Sciences',
    'Social Sciences and Humanities'
  ];

  const handleJournalSelect = (option) => {
    setSelectedJournal(option);
  };

  const handleBookSelect = (option) => {
    setSelectedBook(option);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? '' : category);
  };

  return (
    <section>
      {/* Top spacing */}
      <div className="td_height_120 td_height_lg_80" />

      {/* Search Section */}
      <div className="container">
        <div className="py-5" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                {/* Find Journals */}
                <div className="col-md-5">
                  <div className="text-center mb-4">
                    <h4 className="mb-4" style={{ color: '#495057', fontWeight: 'bold' }}>
                      Find Journals
                    </h4>
                    <CustomDropdown
                      options={journalOptions}
                      selected={selectedJournal}
                      onSelect={handleJournalSelect}
                      placeholder="Search for journals"
                      isOpen={journalDropdownOpen}
                      setIsOpen={setJournalDropdownOpen}
                    />
                    <button 
                      className="btn mt-3"
                      style={{
                        backgroundColor: '#fd7e14',
                        borderColor: '#fd7e14',
                        color: 'white',
                        fontWeight: '500',
                        padding: '10px 30px',
                        borderRadius: '5px'
                      }}
                    >
                      Search Journals
                    </button>
                  </div>
                </div>

                {/* OR Divider */}
                <div className="col-md-2 d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <span style={{ color: '#6c757d', fontSize: '1.2rem', fontWeight: 'bold' }}>
                      or
                    </span>
                  </div>
                </div>

                {/* Find Books/Proceedings */}
                <div className="col-md-5">
                  <div className="text-center mb-4">
                    <h4 className="mb-4" style={{ color: '#495057', fontWeight: 'bold' }}>
                      Find Books/Proceedings
                    </h4>
                    <CustomDropdown
                      options={bookOptions}
                      selected={selectedBook}
                      onSelect={handleBookSelect}
                      placeholder="Search for books/proceedings"
                      isOpen={bookDropdownOpen}
                      setIsOpen={setBookDropdownOpen}
                    />
                    <button 
                      className="btn mt-3"
                      style={{
                        backgroundColor: '#fd7e14',
                        borderColor: '#fd7e14',
                        color: 'white',
                        fontWeight: '500',
                        padding: '10px 30px',
                        borderRadius: '5px'
                      }}
                    >
                      Search Books
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacing */}
        <div className="td_height_60 td_height_lg_40" />

        {/* Categories Section */}
        <div className="text-center mb-5">
          <h2 style={{ color: '#495057', fontWeight: 'bold', fontSize: '2.2rem' }}>
            Explore STEM, Social Science, etc., in DHE Publications
          </h2>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="d-flex justify-content-center flex-wrap">
              {categories.map((category, index) => (
                <CategoryButton
                  key={index}
                  isActive={activeCategory === category}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </CategoryButton>
              ))}
            </div>
          </div>
        </div>

        {/* Spacing */}
        <div className="td_height_60 td_height_lg_40" />

        {/* Open Access Section */}
        <div className="py-5" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
          <div className="text-center">
            <h2 style={{ color: '#495057', fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>
              All Articles In DHE Publications Are Open Access
            </h2>
            <p 
              style={{ 
                color: '#6c757d', 
                fontSize: '1.1rem', 
                lineHeight: '1.6',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              Articles published on open access are peer-reviewed and made freely available for everyone to read, 
              download, and reuse in line with the user license displayed on the article.
            </p>
            
            <div className="row justify-content-center mt-5">
              <div className="col-md-5 mb-4">
                <ActionButton href="#" variant="primary">
                  View the list of full open access<br />journals and books
                </ActionButton>
              </div>
              
              <div className="col-md-5 mb-4">
                <ActionButton href="#" variant="primary">
                  Read more about DHE Publications
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};

export default DHEPublicationsPage;