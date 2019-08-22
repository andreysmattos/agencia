<and-config
        :configs="{{ $configs ?? 'null'}}"
        :filters="{{$filters ?? 'null'}}"
        :fields="{{$fields ?? 'null'}}"
         token="{{csrf_token()}}"
        :menus="{{$menus ?? 'null'}}"
        :breadcrumbs="{{$breadcrumbs ?? 'null'}}"
></and-config>
