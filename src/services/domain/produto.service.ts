import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProdutoDTO } from "../../models/produto.dto";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class ProdutoService{

    constructor(public http: HttpClient){

    }

    findByCategoria(categoria_id: string) : Observable<ProdutoDTO[]>  {
        return this.http.get<ProdutoDTO[]>(`${API_CONFIG.baseUrl}/produtos/?categorias=${categoria_id}`);
    }

}