import { PagamentoDTO } from "./pagamento.dto";
import { RefDTO } from "./ref.dto";
import { ItemPedidoDTO } from "../../models/item-pedido.dto";

export interface PedidoDTO {
    cliente: RefDTO;
    enderecoDeEntrega: RefDTO;
    pagamento: PagamentoDTO;
    itens: ItemPedidoDTO[];
}