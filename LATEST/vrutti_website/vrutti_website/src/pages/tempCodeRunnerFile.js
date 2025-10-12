const toggle = () => {
    setIsOpen(!isOpen);
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <div style={{ marginLeft: isOpen ? '250px' : '0', padding: '20px' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '30px',
            textAlign: 'center'
          }}>
            <div style={{ marginBottom: '20px' }}>
              <p>Analyzing your assessment responses...</p>
              <p>This may take a moment as we generate your personalized report.</p>
            </div>
            <div style={{
              display: 'inline-block',
              w