const displayVNDCurrency = (num) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,  // Usually VND doesn't have fractional units
    });

    return formatter.format(num);
};

export default displayVNDCurrency;
