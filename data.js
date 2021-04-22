$(document).ready(function() {
    $.getJSON("/data/stock-response.json", function(data) {
        let skus_data = '';
        $.each(data, function(key, value) {
            skus_data += '<tr>';
            skus_data += '<td>'+value.sku+'</td>';
            skus_data += '<td>'+value.physicalWarehouse+'</td>';
            skus_data += '<td>'+value.logicalWarehouse+'</td>';
            skus_data += '<td>'+value.skuDescription+'</td>';
            skus_data += '<td>'+value.availableToSell+'</td>';
            skus_data += '<td>'+value.physicalStock+'</td>';
            skus_data += '<tr>';
        });
        $('#myTable').append(skus_data);
    });
});