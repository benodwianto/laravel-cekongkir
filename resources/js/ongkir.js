$('select[name="province_origin"]').on('change', function() {
    let provinceId = $(this).val();

    if (provinceId) {
        jQuery.ajax({
            url: '/api/province/' + provinceId + '/cities',
            type: "GET",
            dataType: "json",
            success: function(data) {
                $('select[name="city_origin"]').empty();
                $.each(data, function(key, value) {
                    $('select[name="city_origin"]').append(`<option value="${key}">${value}</option>`);
                });
            },
        });
    } else {
        $('select[name="city_origin"]').empty();
    }
});
