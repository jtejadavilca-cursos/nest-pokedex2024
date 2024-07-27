import { Module } from '@nestjs/common';

import { HttpAdapter } from 'src/common/interfaces/http-adapter.interface';
import { AxiosAdapter } from 'src/common/adapter/axios.adapter';

const httpAdapterProvider = {
    provide: HttpAdapter,
    useClass: AxiosAdapter
}

@Module({
    providers: [
        httpAdapterProvider
    ],
    exports: [
        httpAdapterProvider
    ]
})
export class CommonModule {}