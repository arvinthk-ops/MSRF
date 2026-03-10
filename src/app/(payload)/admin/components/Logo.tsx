import React from 'react'

const Logo: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
        }}>
            <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #D4A843 0%, #b8922e 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '18px',
                color: '#0a0e1a',
                letterSpacing: '-0.5px',
                flexShrink: 0,
            }}>
                M
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                <span style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: 'var(--theme-text, #e2e8f0)',
                    letterSpacing: '0.5px',
                }}>
                    MCFC
                </span>
                <span style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'var(--theme-elevation-500, #64748b)',
                    letterSpacing: '0.3px',
                    textTransform: 'uppercase',
                }}>
                    Admin Portal
                </span>
            </div>
        </div>
    )
}

export default Logo
