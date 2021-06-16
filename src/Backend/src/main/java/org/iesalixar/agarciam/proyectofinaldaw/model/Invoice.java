package org.iesalixar.agarciam.proyectofinaldaw.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="invoice")
public class Invoice {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name="order_id")
	private Order orderInvoice;

	public Invoice() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Order getOrderInvoice() {
		return orderInvoice;
	}

	public void setOrderInvoice(Order orderInvoice) {
		this.orderInvoice = orderInvoice;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((orderInvoice == null) ? 0 : orderInvoice.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Invoice other = (Invoice) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (orderInvoice == null) {
			if (other.orderInvoice != null)
				return false;
		} else if (!orderInvoice.equals(other.orderInvoice))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Invoice [id=" + id + ", orderInvoice=" + orderInvoice + "]";
	}
	
}
