
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './pages/App'

class ErrorBoundary extends React.Component<{children: any}, {error: any}> {
  constructor(props:any){ super(props); this.state={error:null}; }
  componentDidCatch(error:any){ this.setState({error}); }
  render(){ if (this.state.error) return React.createElement('pre', {style:{position:'fixed',top:8,right:8,zIndex:99999,background:'rgba(0,0,0,.7)',padding:12,borderRadius:12,maxWidth:420,whiteSpace:'pre-wrap'}}, String(this.state.error)); return this.props.children; }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
)
