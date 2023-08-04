$(document).ready(
    () => api_status()
);

const HOST = '0.0.0.0';

function api_status () {
    const API_URL = `http://${HOST}:5001/api/v1/status/`;
    $.get(API_URL, function (data, status) {
        if (data.status === 'OK' && status === 'success') {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('available');
        }
    }
    );
}