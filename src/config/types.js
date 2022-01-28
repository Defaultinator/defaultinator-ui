import PropTypes from 'prop-types';

export const CpeType = PropTypes.shape({
  part: PropTypes.oneOf(['a', 'o', 'h', '*', '']),
  vendor: PropTypes.string,
  product: PropTypes.string,
  version: PropTypes.string,
  update: PropTypes.string,
  edition: PropTypes.string,
  language: PropTypes.string,
})

export const CredentialType = PropTypes.shape({
  username: PropTypes.string,
  password: PropTypes.string,
  references: PropTypes.arrayOf(PropTypes.string),
  cpe: CpeType,
  isVerified: PropTypes.bool,
  edits: PropTypes.arrayOf(PropTypes.shape({
    edit: PropTypes.object,
    timestamp: PropTypes.number,
  })),
});

export const APIKeyType = {
  apiKey: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  notes: PropTypes.string,
};

export const PaginatedDataTableConfigType = PropTypes.shape({
  fields: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    fieldName: PropTypes.string.isRequired,
    align: PropTypes.oneOf(['left', 'right', 'center']),
  })),
}).isRequired;