import { serviceDocumentHeaderStyles } from './styles'
import { ServiceDocumentProps } from '../types'

type ServiceDocumentHeaderProps = Pick<ServiceDocumentProps, 'logo' | 'logoAlt' | 'companyName' | 'tagline' | 'contactLines'>

export const ServiceDocumentHeader = ({
  logo,
  logoAlt      = '',
  companyName,
  tagline,
  contactLines = [],
}: ServiceDocumentHeaderProps) => (
  <div style={serviceDocumentHeaderStyles.root}>

    <div style={serviceDocumentHeaderStyles.logoSection}>
      {logo && (
        <img src={logo} alt={logoAlt} style={serviceDocumentHeaderStyles.logo} crossOrigin="anonymous" />
      )}
      <div>
        <div style={serviceDocumentHeaderStyles.companyName}>{companyName}</div>
        {tagline && <div style={serviceDocumentHeaderStyles.tagline}>{tagline}</div>}
      </div>
    </div>

    <div />

    <div style={serviceDocumentHeaderStyles.contactInfo}>
      {contactLines.map((line, i) => <div key={i}>{line}</div>)}
    </div>

  </div>
)