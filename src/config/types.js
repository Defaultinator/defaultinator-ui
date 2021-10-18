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
});

export const APIKeyType = PropTypes.shape({
    apiKey: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    notes: PropTypes.string,
});