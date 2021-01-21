import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class PtBrMatPaginatorIntl extends MatPaginatorIntl {

    itemsPerPageLabel: string = 'Qtd. por página:';
    nextPageLabel: string = 'Próximo';
    previousPageLabel: string = 'Anterior';

    getRangeLabel = function (page: any, pageSize: any,
        length: any): string {
      if (length === 0 || pageSize === 0) {
          return '0 de ' + length;
      }
      length = Math.max(length, 0);
      const startIndexm = page * pageSize;
      const endIndex = startIndexm < length ?
        Math.min(startIndexm + pageSize, length) :
        startIndexm + pageSize;
      return startIndexm + 1 + ' - ' + endIndex + ' / ' + length;
    };
}