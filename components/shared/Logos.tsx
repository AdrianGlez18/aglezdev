import React from 'react'

const Logos = () => {
    return (
        <div className='logo-slider'>
            <div className="list-of-logos">
                <div className="logo-img" style={{ "--logo-position": 1 } as React.CSSProperties}><img src="logos/js.webp" alt="" /></div>
                <div className="logo-img" style={{ "--logo-position": 2 } as React.CSSProperties}><img src="logos/ts.webp" alt="" /></div>
                <div className="logo-img" style={{ "--logo-position": 3 } as React.CSSProperties}><img src="logos/py.webp" alt="" /></div>
                <div className="logo-img" style={{ "--logo-position": 4 } as React.CSSProperties}><img src="logos/next.webp" alt="" /></div>
                <div className="logo-img" style={{ "--logo-position": 5 } as React.CSSProperties}><img src="logos/react.webp" alt="" /></div>
                <div className="logo-img" style={{ "--logo-position": 6 } as React.CSSProperties}><img src="logos/node.webp" alt="" /></div>
                <div className="logo-img" style={{ "--logo-position": 7 } as React.CSSProperties}><img src="logos/mongo.webp" alt="" /></div>
                <div className="logo-img" style={{ "--logo-position": 8 } as React.CSSProperties}><img src="logos/git.webp" alt="" /></div>
                <div className="logo-img" style={{ "--logo-position": 9 } as React.CSSProperties}><img src="logos/sql.webp" alt="" /></div>
                <div className="logo-img" style={{ "--logo-position": 10 } as React.CSSProperties}><img src="logos/flutter.webp" alt="" /></div>
            </div>
        </div>
    )
}

export default Logos